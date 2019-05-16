import { Component } from '@angular/core';
import { PersonaService } from './servicios/persona.service'; /**Importar el servicio */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Botón';
  estado : boolean = true;
  textboton : string = 'Ocultar';
  public personas: any; /** Esta es la forma para definir algo que no sabes, 
  se utilzia un any para peteciones al servidor porque a futuro el backend puede cambiar */

  

  public ocultar(){
    this.estado = !this.estado;
    if(this.estado==true){
      this.textboton='Ocultar';
    }else{
      this.textboton='Mostrar';
    }
  }

  /** Aquí me estoy suscribiendo, es decir, si hay un cambio en traerPersonas(), que yo me entere */
  /**funciones anominima, esta seria la funcion que nos dice que se resolvio la promesa */ 
  
  public traerPersona(){
    this.personaServiece.traerPersonas().subscribe( 
      data => {  /** A la final data es la resolución de la promesa por eso no se llama arriba en la variable */
        console.log(data); 
        this.personas = data;
      })
  }
    
  /**Inyectar el servicio */
  /** Es que nos va a permitir saber como voy a crear ese objeto, crea tal atributo para la clase */
/** por lo general el constructor se usa cuando queremos inyectar algo  */

  constructor(private personaServiece:PersonaService){
  }

 

}



