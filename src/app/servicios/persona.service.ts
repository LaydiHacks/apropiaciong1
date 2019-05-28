import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';


@Injectable({  /* Este lo vuelve un singleton y además, permite luego inyectarlo */
  providedIn: 'root'
})
export class PersonaService {
 
  public personas: any = [];
  public persona: any = {};
  public id: number;

  public traerPersonas(){
    return this.http.get("http://www.mocky.io/v2/5cda1ba43000006d0068c509");
    /*Esto retorna un observable -> es un patrón de diseño, que se va a encargar de verificar que la promesa se resuelva */
  }


  /*el public se cuando no queremos que se use eso en otra clase */
  /* Es private porque es el que va permitir realizar la comunicación con nuestrstro backend  */ 
  constructor(private http:HttpClient) {  
    this.traerPersonas().subscribe( 
      data => { 
        this.personas = data;
      })
  }

  public setPersona(id){
    this.persona=this.personas[id-1]
  }

  public getPersona(){
    return this.persona;
  }

}


