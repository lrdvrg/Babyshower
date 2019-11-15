import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BabyshowerService {
  listado: any;
  usuarios: any;
  escogidos: any;
  original: any;

  idUsuario: number;
  idListado: number;

  isAdmin = false;

  seleccion: {
    nombre: string,
    deseo: string
  };

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getListado(){
    this.http.get('https://babyshower.gear.host/api/Listados')
    .subscribe(res=>{
        console.log(res);
        this.listado = res;
      });
  }

  removeListado(idlist: number){
    this.http.delete('https://babyshower.gear.host/api/Listados/'+idlist)
    .subscribe(res=>{
        console.log(res);
      });
  }

  getUsuarios(){
    this.http.get('https://babyshower.gear.host/api/Usuarios')
    .subscribe(res=>{
        console.log(res);
        this.usuarios = res;
      });
  }

  getDeseosEscogidos(){
    this.http.get('https://babyshower.gear.host/api/DeseosEscogidos')
    .subscribe(res=>{
        console.log(res);
        this.escogidos = res;
        this.getOriginal();
      });
  }

  postDeseoEscogido(idlist: number){
    this.http.post('https://babyshower.gear.host/api/DeseosEscogidos', this.seleccion)
    .subscribe(res=>{
      console.log(res);

      this.removeListado(idlist);
      this.getListado();
      this.getUsuarios();
      this.toastr.success('Gracias','Tu eleccion fue registrada');
    });

  }

  getOriginal(){
    this.http.get('https://babyshower.gear.host/api/Original')
    .subscribe(res=>{
        console.log(res);
        this.original = res;
      });
  }

  refreshLists(){
    this.getDeseosEscogidos();
    this.getListado();
    this.getUsuarios();
  }
}
