import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
//import { Welcome } from "../models/response.interface";
import { RecipeName, Result } from "../interfaces/nombre_receta";
import { Welcome } from "../models/response.interface";
import { catchError, Observable, throwError } from "rxjs";
import { cuerpo } from "../models/body.interface";
import { login } from "../models/login.interface";
import { response2 } from "../models/response.autenticacion";
import Swal from "sweetalert2";


@Injectable({
  providedIn: 'root'
})

export class JsonService {
  postId: any;
  constructor(private http: HttpClient){}


  private body:cuerpo={
    email: "",
    password: ""
  }
token:any={}
private direccion:string='http://challenge-react.alkemy.org/'




  getJson(url:string){
    return this.http.get<RecipeName>(url)
  }

  getJson2(url:string){
    return this.http.get<Welcome>(url)
    
  }


  loginPassword(form:login):Observable<response2>{
    this.body.email=form.email;
    this.body.password=form.password;
    return this.http.post<response2>(this.direccion, this.body)
  }


  grabarLocalStorage(res:any, objetoJson:any){
    
    localStorage.setItem("token", objetoJson.token);
    
  }

  leerLocalStorage(){
    let milocalstorage = localStorage.getItem("token")
    return milocalstorage;
  }




}
