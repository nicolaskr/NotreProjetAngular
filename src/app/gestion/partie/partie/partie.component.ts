import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Compte } from 'src/app/model/compte';
import { Partie } from 'src/app/model/partie';
import { PartieDto } from 'src/app/modelDto/partie-dto';
import { PartieServiceService } from 'src/app/services/partie-service.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./partie.component.scss'],
})
export class PartieComponent implements OnInit {
  partieDialog: boolean = false;
  partieCreationDialog: boolean = false;

  parties: Partie[] = [];

  partie: Partie = new Partie();

  selectedParties: Partie[] = [];

  submitted: boolean = false;

  statuses: any[] = [];

  selectedComptes: Compte[] = [];

  constructor(
    private partieService: PartieServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private sessionService: SessionService
  ) {}

  ngOnInit() {
    this.partieService.getAll().subscribe(
      (data) => {
        this.parties = data;
        console.log(data);
      },
      (error) => {
        console.log('error in getAll PartieService');
      }
    );
  }

  openNew() {
    this.partie = new Partie();
    this.submitted = false;
    this.partieCreationDialog = true;
  }

  deleteSelectedParties() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected parties?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.selectedParties.forEach((partie) => {
          this.partieService.delete(partie).subscribe((res) => {
            this.parties = this.parties.filter((val) => val.id !== partie.id);
            this.partie = new Partie();
            this.messageService.add({
              severity: 'success',
              summary: 'Successful',
              detail: 'Product Deleted',
              life: 3000,
            });
          });
        });
      },
    });
  }

  editPartie(partie: Partie) {
    // this.partie = { ...partie };
    this.partie = partie;
    this.partieDialog = true;
  }

  deletePartie(partie: Partie) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + partie.id + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.partieService.delete(partie).subscribe((res) => {
          this.parties = this.parties.filter((val) => val.id !== partie.id);
          this.partie = new Partie();
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Product Deleted',
            life: 3000,
          });
        });
      },
    });
  }

  savePartie() {
    this.submitted = true;
    if (this.partie.id) {
      this.modifyDescriptionPartie(); //probleme lorsque l'on envoie une Map dans le body
      // this.put();
    } else {
      // console.log(this.selectedComptes.length === 0);
      if (this.selectedComptes.length === 0) {
        this.savePartieWithoutCompte();
      } else {
        this.savePartieWithCompte();
      }
    }
  }

  put() {
    if (this.partie.description) {
      this.partieService.put(this.partie).subscribe(
        (data) => {
          console.log(data);

          this.partie = data;
          let index = this.findIndexById(this.partie.id!);
          this.parties[index] = data;
          this.saveMessageService();
        },
        (error) => {
          console.log('error modifyDescriptionPartie');
        }
      );
    }
  }

  modifyDescriptionPartie() {
    if (this.partie.description) {
      // console.log('modifyDescriptionPartie');

      // let patchMap: Map<string, string> = new Map();
      // patchMap.set('description', this.partie.description!);
      // this.partieService.patch(this.partie, patchMap).subscribe(
      this.partieService.patchDescription(this.partie).subscribe(
        (data) => {
          // console.log(data);
          this.partie = data;
          let index = this.findIndexById(this.partie.id!);
          this.parties[index] = data;
          this.saveMessageService();
          this.resertAfterPartieAndSessionCreation();
        },
        (error) => {
          console.log('error modifyDescriptionPartie');
        }
      );
    }
  }

  resertAfterPartieAndSessionCreation() {
    this.selectedComptes = [];
    this.partie = new Partie();
    this.partieCreationDialog = false;
    this.partieDialog = false;
  }

  savePartieWithCompte() {
    this.partieService.create(this.partie).subscribe(
      (data) => {
        this.partie = data;
        this.parties.push(data);
        this.saveMessageService();
        this.saveSession();
        this.resertAfterPartieAndSessionCreation();
      },
      (error) => {
        console.log('error savePartieWithCompte');
      }
    );
  }

  saveSession() {
    console.log('in save session');
    console.log(this.selectedComptes);
    this.selectedComptes.forEach((compte) => {
      // console.log(this.partie);
      // console.log(compte);
      if (this.partie.id && compte.id) {
        this.sessionService.post(this.partie, compte).subscribe(
          (data) => {
            this.parties[this.parties.length - 1].sessions?.push(data);
            this.saveSessionMessageService();
          },
          (error) => {
            console.log('savePartieWithCompte');
          }
        );
      }
    });
  }

  savePartieWithoutCompte() {
    this.partieService.create(this.partie).subscribe(
      (data) => {
        this.partie = data;
        this.parties.push(data);
        this.saveMessageService();
        this.resertAfterPartieAndSessionCreation();
      },
      (error) => {
        console.log('error create PartieService');
      }
    );
  }

  saveSessionMessageService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Session Created',
      life: 3000,
    });
  }

  saveMessageService() {
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Partie Created',
      life: 3000,
    });
  }

  hideDialog() {
    this.partieDialog = false;
    this.partieCreationDialog = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.parties.length; i++) {
      if (this.parties[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSelectedComptes(selectedComptes: Compte[]) {
    this.selectedComptes = selectedComptes;
    // console.log(this.selectedComptes);
  }
}
