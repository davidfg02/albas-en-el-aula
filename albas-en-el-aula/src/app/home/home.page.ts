import { Component } from '@angular/core';
import { IonContent, IonFooter } from '@ionic/angular';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, AppHeaderComponent, AppFooterComponent],
})
export class HomePage {
}
