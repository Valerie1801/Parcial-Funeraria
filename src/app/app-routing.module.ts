import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactenosComponent } from "./paginas/contactenos/contactenos.component"
import { CorosComponent } from "./paginas/coros/coros.component"
import { CremacionesComponent } from "./paginas/cremaciones/cremaciones.component"
import { FloresComponent } from "./paginas/flores/flores.component"
import { HomeComponent } from "./paginas/home/home.component"
import { SepeliosComponent } from "./paginas/sepelios/sepelios.component"

import { RegistrofallecidosComponent } from "./paginas/registrofallecidos/registrofallecidos.component"
import { TarifasComponent } from "./paginas/tarifas/tarifas.component"


const routes: Routes = [
  { path: 'contactenos', component: ContactenosComponent },
  { path: 'coros', component: CorosComponent },
  { path: 'cremaciones', component: CremacionesComponent },
  { path: 'flores', component: FloresComponent },
  { path: '', component: HomeComponent },
  { path: 'sepelios', component: SepeliosComponent },
  { path: 'tarifas', component: TarifasComponent },
  { path: 'regristrofallecidos', component: RegistrofallecidosComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
