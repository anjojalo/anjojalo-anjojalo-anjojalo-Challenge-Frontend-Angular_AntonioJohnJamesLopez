import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { login } from '../models/login.interface';
import { JsonService } from '../services/json.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formularioLogin= new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  })

  status:string="";
  token:object={}
  message:string="";
  token2:string="";
  erroEmail:string="";
  erroPassword:string="";

  constructor(private conexionpost:JsonService, private route:Router) { }


  ngOnInit(): void {

    
  }

  loginPost(form:login){



    this.token={};

    this.conexionpost.loginPassword(form).subscribe(

      res=>{
        Swal.fire({
          title: 'Correcto',
          text: 'Bienvenido',
          icon:'success',
          timer: 2000
        })
        this.message="";
        this.token={};
        this.token=res

        let jsonString=(JSON.stringify(this.token));
        let objetoJson=JSON.parse(jsonString)
        this.message="Correcto"
        this.conexionpost.grabarLocalStorage(this.token, objetoJson)
        this.conexionpost.leerLocalStorage()
        this.route.navigate(['buscar-receta'])


      },
      error=>{
        
        Swal.fire({
          title: 'Error',
          text: `${error.HttpErrorResponse}`,
          icon:'error',
          padding: "1rem",
          timer: 2000
        })
      
      this.message="Datos incorrectos"

      }


    )

  }


  validacionEmail(): string{
    if((this.formularioLogin.get('email')?.touched) && this.formularioLogin.get('email')?.invalid){
        this.erroEmail="Wrong Email"; 
    }else{
      this.erroEmail="";
    }
    return this.erroEmail;
  }

  validacionPassword(): string{
    if(this.formularioLogin.get('password')?.invalid && this.formularioLogin.get('password')?.touched){
      return this.erroPassword="Required Field"
    }

    return this.erroPassword=""
  }


}
