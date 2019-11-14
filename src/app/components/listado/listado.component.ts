import { Component, OnInit } from '@angular/core';
import { BabyshowerService } from '../../services/babyshower.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public babyshower: BabyshowerService) { }

  ngOnInit() {
    this.bringListado();
  }

  bringListado(){
    this.babyshower.getListado();
  }

  seleccionar(id: number, deseo: string){
    this.babyshower.idListado = id;
    this.babyshower.seleccion.deseo = deseo;

  }
}
