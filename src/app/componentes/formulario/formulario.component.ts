import { Component, Input,  OnInit, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnChanges, OnInit {


  @Input() id: number;
  private _id: number;
  public personas: any = []; /** Arreglo*/
  public persona: any = {}; /**Objeto */

  constructor(private personaServiece:PersonaService) { }

  ngOnInit() {
    this.personaServiece.traerPersonas().subscribe( 
      data => {  /** A la final data es la resolución de la promesa por eso no se llama arriba en la variable */
        this.personas = data;
        this.persona = this.personas[0];
      })
  }

  ngOnChanges(changes: SimpleChanges){
    const id: SimpleChange = changes.id;
    console.log('prev value: ', id.previousValue);
    console.log('got name: ', id.currentValue);
    this._id = id.currentValue.toUpperCase();
  }

  public mostrar(){
    console.log(this.persona);
  }

}
