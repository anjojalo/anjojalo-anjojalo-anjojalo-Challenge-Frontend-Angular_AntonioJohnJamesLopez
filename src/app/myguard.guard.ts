import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JsonService } from './services/json.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {

  constructor(private router:Router, private servicio:JsonService){

  }
  private revisarLocalStorage:any;
  private credencial:boolean=false;


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.revisarLocalStorage = this.servicio.leerLocalStorage();
      
       if(this.revisarLocalStorage==null || this.revisarLocalStorage==undefined){
        this.credencial=false;
      }else{
        this.credencial=true;
      }
      
      return this.credencial

  }



}
