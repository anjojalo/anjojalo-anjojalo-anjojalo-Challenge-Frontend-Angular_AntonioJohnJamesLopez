import { Injectable } from '@angular/core';
import { platosMenu } from 'src/class/platos.menu';

@Injectable({
  providedIn: 'root'
})
export class MenuArrayService {

  constructor() { }
  //encontrar!:number;
  platoExiste!:boolean;
  platosMaximo:number=4;
  platosMatimoMessage:string="El menu ya tiene 4 platos"
  platosEnMenu:number=0;
  acumuladoHealtCore:number=0;
  acumuladoPrecio:number=0;


  miMenu:platosMenu[]=[];

  agregarPlatos(miPlato:platosMenu){
    if(this.miMenu.length>=this.platosMaximo || (miPlato.id==undefined || miPlato.id==0))
    {
      
    }else{
    this.miMenu.push(miPlato);
    
    }
  }

}
