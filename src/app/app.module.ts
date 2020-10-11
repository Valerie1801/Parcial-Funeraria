import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './paginas/home/home.component';
import { SepeliosComponent } from './paginas/sepelios/sepelios.component';
import { CremacionesComponent } from './paginas/cremaciones/cremaciones.component';
import { TarifasComponent } from './paginas/tarifas/tarifas.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { FloresComponent } from './paginas/flores/flores.component';
import { CorosComponent } from './paginas/coros/coros.component';
import { PieComponent } from './componentes/pie/pie.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ImgcapComponent } from './componentes/imgcap/imgcap.component';
import { CardgroupComponent } from './componentes/cardgroup/cardgroup.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistrofallecidosComponent } from './paginas/registrofallecidos/registrofallecidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SepeliosComponent,
    CremacionesComponent,
    TarifasComponent,
    ContactenosComponent,
    FloresComponent,
    CorosComponent,
    PieComponent,
    CardsComponent,
    CarruselComponent,
    TablaComponent,
    ImgcapComponent,
    CardgroupComponent,
    RegistroComponent,
    RegistrofallecidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
