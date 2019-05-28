import { Component, Input,  OnChanges, SimpleChanges, SimpleChange, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  

  // @Input() id: number;
  // private _id: number;
  public personas: any = []; /** Arreglo*/
  public persona: any = {}; /**Objeto */
  // log:string[]

  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    /** A la final data es la resolución de la promesa por eso no se llama arriba en la variable */
    /*
    this.personaService.traerPersonas().subscribe( 
      data => {  
        this.personas = data;
        this.persona = this.personas[0];
      })*/
  }

  // ngOnChanges(changes: SimpleChange){ /**Iniciar la propiedad de ngOnchanges */
    
  //   console.log(changes);
  //   // console.log('prev value: ', id.previousValue);
  //   // console.log('got name: ', id.currentValue);
  //   // this._id = id.currentValue.toUpperCase();
  // }

  public mostrar(){
    console.log(this.persona);
  }

  public seleccionarPersona(personita){
    let personaactual = personita.target.value - 1;
    this.persona = this.personas[personaactual]
    console.log(personita.target.value);
  }
 
  public selectId(){
    this.personaService.setPersona(this.persona.id)
  }

}
