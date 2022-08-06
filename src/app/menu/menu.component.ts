import { Component, OnInit } from '@angular/core';
import { platosMenu } from 'src/class/platos.menu';
import Swal from 'sweetalert2';
import { MenuArrayService } from '../services/menu-array.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private mostrarPlatos:MenuArrayService) {
  this.miMenu=this.mostrarPlatos.miMenu;
  this.healtCore=this.mostrarPlatos.acumuladoHealtCore
  this.price=this.mostrarPlatos.acumuladoPrecio

  }

  healtCore:number=0;
  price:number=0;
  acumuladoPrecio:number=0;
  acumuladoHealtCore:number=0;
  promedioPreparacion:number=0;
  
  




  miMenu:platosMenu[]=[];
  valores:any[]=[
    {"precio":0},
    {"healtCore":0},
    {"preparaion":0}
  ];

  ngOnInit(): void {
    this.miMenu=this.mostrarPlatos.miMenu;
    /* this.mostrarPlatos.calcularEstadisticas();
    this.acumuladoHealtCore=this.mostrarPlatos.acumuladoHealtCore(); */

  }

  miId(id:number){
    Swal.fire({
      title: 'Borrando plato del menu',
      icon:'success',
      timer: 1000
    })
    this.miMenu.splice(id,1)
  }

calcularEstadisticas(){
  
    if(this.miMenu.length!=0) {
      let sumatoriaHealtCore  = this.miMenu.map(item => item.HealthScore).reduce((prev, curr) => prev + curr, 0);
      this.acumuladoHealtCore=(sumatoriaHealtCore/this.miMenu.length)
    

      this.acumuladoPrecio  = this.miMenu.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
      
      let sumatorioPreparacion = this.miMenu.map(item => item.tiempoPreparacion).reduce((prev, curr) => prev + curr, 0);
      this.promedioPreparacion =(sumatorioPreparacion/this.miMenu.length)

    }
    
 }
}
