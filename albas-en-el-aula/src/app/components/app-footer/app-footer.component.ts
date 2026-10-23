import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonIcon, IonFooter, IonButton, IonList, IonItem, IonInput } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logoTiktok, logoInstagram, mailOutline } from 'ionicons/icons';


@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  imports: [IonIcon, IonFooter, RouterLink, IonButton, IonList, IonItem, IonInput],
})
export class AppFooterComponent  implements OnInit {

  year = new Date().getFullYear();

  constructor() {
    addIcons ({logoTiktok, logoInstagram, mailOutline})
  }

  ngOnInit() {}

}
