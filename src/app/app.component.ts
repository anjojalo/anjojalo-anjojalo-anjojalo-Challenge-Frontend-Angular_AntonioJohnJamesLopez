import { Component } from '@angular/core';
import { Welcome } from './models/response.interface';
import { JsonService } from './services/json.service';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challengefrontedangular';

  constructor(){

  }
}
