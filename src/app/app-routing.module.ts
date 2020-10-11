import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactenosComponent } from "./paginas/contactenos/contactenos.component"
import { CorosComponent } from "./paginas/coros/coros.component"
import { FloresComponent } from "./paginas/flores/flores.component"
import { HomeComponent } from "./paginas/home/home.component"

import { RegistrofallecidosComponent } from "./paginas/registrofallecidos/registrofallecidos.component"
import { TarifasComponent } from "./paginas/tarifas/tarifas.component"
import { RegistroComponent } from './componentes/registro/registro.component'


const routes: Routes = [
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'coros', component: CorosComponent },
  { path: 'flores', component: FloresComponent },
  { path: '', component: HomeComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'regristrofallecidos', component: RegistrofallecidosComponent },
  { path: 'regristro', component: RegistroComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
