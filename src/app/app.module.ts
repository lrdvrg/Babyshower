import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ListadoComponent } from './components/listado/listado.component';
import { MenuComponent } from './components/menu/menu.component';
import { BabyshowerService } from './services/babyshower.service';
import { CommonModule } from '@angular/common';
import { EscogidosComponent } from './components/escogidos/escogidos.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    MenuComponent,
    EscogidosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BabyshowerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
