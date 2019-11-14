import { Component } from '@angular/core';
import { BabyshowerService } from './services/babyshower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Babyshower';

  constructor(public babyshower: BabyshowerService){}
}
