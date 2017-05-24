import { Component } from '@angular/core';
import {PhoneComponent} from './phone/phone.component'
import {PhoneService} from "./phone.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhoneComponent,PhoneService]
})
export class AppComponent {
  title = 'app works!';
}
