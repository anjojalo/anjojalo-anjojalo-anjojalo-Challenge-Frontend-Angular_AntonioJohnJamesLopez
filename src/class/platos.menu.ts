export class platosMenu{

  constructor(HealthScore:number, price:number, imagen:string, id:number, vegetariano:boolean, title:string, tiempoPreparacion:number)
  {
    this.HealthScore=HealthScore;
    this.price=price;
    this.imagen=imagen;
    this.id=id
    this.vegetariano=vegetariano
    this.title=title;
    this.tiempoPreparacion=tiempoPreparacion
  }

  HealthScore:number;
  price:number;
  imagen:string
  id:number;
  vegetariano:boolean
  title:string
  tiempoPreparacion:number;

}
