import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, RouterLink],
})
export class AppHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
