import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({  /* Este lo vuelve un singleton y además, permite luego inyectarlo */
  providedIn: 'root'
})
export class PersonaService {
 

  public traerPersonas(){
    return this.http.get("http://www.mocky.io/v2/5cda1ba43000006d0068c509");
    /*Esto retorna un observable -> es un patrón de diseño, que se va a encargar de verificar que la promesa se resuelva */
  }


  /*el public se cuando no queremos que se use eso en otra clase */
  /* Es private porque es el que va permitir realizar la comunicación con nuestrstro backend  */ 
  constructor(private http:HttpClient) {  
  
  }
}


