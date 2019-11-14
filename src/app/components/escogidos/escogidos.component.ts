import { Component, OnInit } from '@angular/core';
import { BabyshowerService } from '../../services/babyshower.service';

@Component({
  selector: 'app-escogidos',
  templateUrl: './escogidos.component.html',
  styleUrls: ['./escogidos.component.css']
})
export class EscogidosComponent implements OnInit {

  constructor(public babyshower: BabyshowerService) { }

  ngOnInit() {
    this.bringEscogidos();
  }

  bringEscogidos(){
    this.babyshower.getDeseosEscogidos();
  }
}
