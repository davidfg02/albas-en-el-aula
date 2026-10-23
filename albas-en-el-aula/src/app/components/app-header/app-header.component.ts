import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBadge, IonAvatar, IonPopover, IonContent, IonList, IonItem } from '@ionic/angular';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [IonHeader, IonToolbar, RouterLink, RouterLinkActive, IonIcon, IonBadge, IonAvatar, IonPopover, IonContent, IonList, IonItem],
})
export class AppHeaderComponent  implements OnInit {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {

    this.authService.isLoggedIn$.subscribe(estado => {
      this.isLoggedIn = estado;
    });
  }

  logout(){
    this.authService.logout()
  }

}