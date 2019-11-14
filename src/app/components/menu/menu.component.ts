import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { BabyshowerService } from '../../services/babyshower.service';
import { format } from 'url';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  formFine: false;
  constructor(public babyshower: BabyshowerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.babyshower.getUsuarios();
  }

  onSubmit(form: NgForm){
    this.babyshower.idUsuario = this.getIdUsuario();
    console.log(this.getIdUsuario());

    console.log(this.getUsuario());

    if(this.getUsuario() !== undefined){
      if(this.getUsuario().isAdmin == 'si'){
        this.babyshower.isAdmin = true;
      } else if(this.babyshower.idUsuario !== undefined && this.babyshower.idListado !== null){
        this.babyshower.postDeseoEscogido(this.babyshower.idListado);
        this.babyshower.refreshLists();
      } else {
        this.toastr.error('Contacta con Sandra', 'Hubo un error');
      }
    } else {
      this.toastr.error('Contacta con Sandra', 'Hubo un error');
    }

    this.resetForm(form);
  }

  resetForm(form?: NgForm){
    if(form!=null){
      form.resetForm();

    } else {
      this.babyshower.seleccion = {
        nombre: '',
        deseo: ''
      }
      this.babyshower.idListado = null;
      this.babyshower.idUsuario = null;
      }


  }

  getIdUsuario(){
    for(let item of this.babyshower.usuarios){
      if(this.babyshower.seleccion.nombre == item.nombre){
        return item.idUsuario;
      }
    }
  }

  getUsuario(){
    for(let item of this.babyshower.usuarios){
      if(this.babyshower.idUsuario == item.idUsuario){
        return item;
      }
    }
  }

  getListado(){
    for(let item of this.babyshower.listado){
      if(this.babyshower.idListado == item.idListado){
        return item;
      }
    }
  }
}
