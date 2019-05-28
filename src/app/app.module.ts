/**  <3 de nuestro proyecto */

/** El Browser es para la página web - deskop */
import { BrowserModule } from '@angular/platform-browser';
/** Navegación de la página */
/** Componentes */
import { AppComponent } from './app.component';

/** Modulos */
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; /*Modulo de los formulario, lo utilizamos para utilizar la 
directiva ngModel*/


/** Servicios */
import { PersonaService } from './servicios/persona.service';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PersonaComponent } from './componentes/persona/persona.component';






@NgModule({
  declarations: [ /** Declaraciones -> Agreagamos los componente que necesitamos */
    AppComponent, FormularioComponent, PersonaComponent
  ],
  imports: [ /**  * Importaciones -> agregamos los modulos que necesitamos*/
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PersonaService], /** Todos los servicios que tenemos */
  bootstrap: [AppComponent]

})
export class AppModule { }
