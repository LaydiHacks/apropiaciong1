import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PersonaComponent } from './componentes/persona/persona.component';


/**Routes es un tipo de dato, creado por angular para identificar la rutas */
/*tendra cada ruta que necesitemos para nuestra aplicación*/

const routes: Routes = [
    {
      path: 'formulario',
      component: FormularioComponent
    },
    {
      path: 'persona',
      component: PersonaComponent
    }
]; 


/**Esas rutas se componen por:
 * Rutas{ path: '', component}
 */

/** Importa  el decorador NgModule, y así la vuelve modulo de angular */
@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  /**Hay importamos el Router module y llama el método forRoor*/
  /**La variable rutas es un arreglo */
  exports: [RouterModule] 
  /**Un aplicación puede tener muchos modulos, esta es la forma de hacerlo public o private pero 
   * desde modulos, así el exports nos permite usar en otro modulo
   */

})
export class AppRoutingModule { }
