import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../servicios/persona.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  public persona: any = {};

  constructor(private personaService:PersonaService) { } /**No olvidar simpre inyectar el servicio */
 
  ngOnInit() {
    this.persona=this.personaService.getPersona();
  }



}
