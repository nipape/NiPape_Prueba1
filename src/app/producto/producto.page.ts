import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  public imagen: string= '';
  public titulo: string= '';
  public precio: string= '';
  public descripcion: string= ''

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    this.route.queryParams.subscribe(parametros => {
      this.imagen = parametros['imagen'] || 'Sin imagen';
      this.titulo = parametros['titulo'] || 'Sin titulo';
      this.precio = parametros['precio'] || 'Sin precio';
      this.descripcion = parametros['descripcion'] || 'Sin descripcion';
  });
  }

}
