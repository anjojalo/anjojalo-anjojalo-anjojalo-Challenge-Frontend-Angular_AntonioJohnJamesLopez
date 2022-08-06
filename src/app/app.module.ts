import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PlatoComponent } from './plato/plato.component';
import { BuscarRecetaComponent } from './buscar-receta/buscar-receta.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MyguardGuard } from './myguard.guard';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';

const misRutas:Routes=[
  {path:'', redirectTo: '/login', pathMatch: 'full'},
  {path:'login', component:LoginComponent },
  {path:'buscar-receta', component:BuscarRecetaComponent, canActivate:[MyguardGuard]},
  {path: 'contacto', component:ContactoComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PlatoComponent,
    BuscarRecetaComponent,
    LoginComponent,
    ContactoComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(misRutas)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
