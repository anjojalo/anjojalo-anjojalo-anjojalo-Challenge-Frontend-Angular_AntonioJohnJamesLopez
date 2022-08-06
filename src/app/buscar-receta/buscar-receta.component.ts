import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { platosMenu } from 'src/class/platos.menu';
import Swal from 'sweetalert2';
import { JsonService } from '../services/json.service';
import { MenuArrayService } from '../services/menu-array.service';

@Component({
  selector: 'app-buscar-receta',
  templateUrl: './buscar-receta.component.html',
  styleUrls: ['./buscar-receta.component.css']
})
export class BuscarRecetaComponent implements OnInit {

  constructor(public json: JsonService, private http: HttpClient, private serviagregarplato:MenuArrayService ){

  this.miMenu=this.serviagregarplato.miMenu

}

  ngOnInit(): void {

  }

/**variables */
formulariBuscarReceta= new FormGroup({
  receta : new FormControl('', [Validators.required, Validators.minLength(2)]),
})

contadorVegan:number=0;

miMenu:platosMenu[]=[]
miPlato:string="";

postId: any;
resultadoPeticion!: Object;
recetaId!:number;
recipe:string="";
imageRecipe:string="";
tiempoPreparacion!:number;
healthScore!:number;
vegetariano!:boolean;
price!:number;
platoExiste:boolean=false;
platosNatioExiste:string="";
tamanoArray:number=0;
noDatosOrPlate:string="";
noDatos:string="";
error:string="";
title:string="";
apiKey:string="apiKey=afa0ea93a6a248c68fa2cd8a22ef59a4"
estadoBusqueda:string="";

/** */
buscarPlato(form:any) {
  this.miPlato=form.receta;
    Swal.fire({
      title: 'Buscando Plato',
      icon:'question',
      timer: 2000
    })
    this.noDatos="";
    this.imageRecipe="";
    this.price=0;
    this.tiempoPreparacion=0;
    this.healthScore=0;
    this.vegetariano=false;

  this.json.getJson(`https://api.spoonacular.com/recipes/complexSearch?${this.apiKey}&number=1&query=${this.miPlato}`).subscribe((res)=>{


  this.imageRecipe=res.results[0].image;
  this.recetaId=res.results[0].id
  this.title=res.results[0].title;
  Swal.fire({
    title: 'Buscando Plato',
    text: 'Estamos en la busqueda',
    icon:'question',
    timer: 1000
  })

     this.json.getJson2(`https://api.spoonacular.com/recipes/${this.recetaId}/information?${this.apiKey}&includeNutrition=false`).subscribe((res)=>{

      this.price=res.pricePerServing;
      this.tiempoPreparacion=res.readyInMinutes;
      this.healthScore=res.healthScore;
      this.vegetariano=res.vegetarian;
    },
    error=>{
      Swal.fire({
        title: 'Error en la busqueda',
        text: 'Estamos en la busqueda',
        icon:'question',
        timer: 1000
      });
    }
) 


  }, error=>{
    Swal.fire({
      title: 'Error en la busqueda',
      text: 'Estamos en la busqueda',
      icon:'question',
      timer: 1000
    })
   }
  )


}


  agregarPlatoArray(){

     if((this.miMenu.some(menu => menu.id ===this.recetaId)==true) || (this.recetaId==undefined) ){
      
      Swal.fire({
        title: 'El plato ya existe o no hay ningun plato que gregar',
        icon:'question',
        timer: 3000
      })

    }
    else{
      
      Swal.fire({
        title: 'Agregando al menu',
        icon:'success',
        timer: 1000
      })
      let miplato= new platosMenu(this.healthScore, this.price, this.imageRecipe, this.recetaId, this.vegetariano, this.title, this.tiempoPreparacion)

    this.serviagregarplato.agregarPlatos(miplato)
    this.noDatosOrPlate=""

    }

    for(let inner of this.miMenu){
      if(inner.vegetariano==true){
        this.contadorVegan++
      }

  }

    if(this.contadorVegan>2){
      
      }

    if(this.tamanoArray>=4){
      
      Swal.fire({
        title: 'Menu Completo',
        icon:'error',
        timer: 1000
      })
    }
  }

 


  calculaTamanoArray(){
    this.tamanoArray=this.serviagregarplato.miMenu.length
  }

  loginOut(){
    Swal.fire({
      title: 'Saliendo de la aplicacion',
      icon:'success',
      timer: 2000
    })
    localStorage.removeItem("token")
   }



   loginPost(form:any){
    console.log("hola");
   }


}


