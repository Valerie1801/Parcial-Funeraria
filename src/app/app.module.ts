import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { HomeComponent } from './paginas/home/home.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { ImgcapComponent } from './componentes/imgcap/imgcap.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PieComponent } from './componentes/pie/pie.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
import { CorosComponent } from './paginas/coros/coros.component';
import { CremacionesComponent } from './paginas/cremaciones/cremaciones.component';
import { FloresComponent } from './paginas/flores/flores.component';
import { SepeliosComponent } from './paginas/sepelios/sepelios.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { TarifasComponent } from './paginas/tarifas/tarifas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    CarruselComponent,
    ImgcapComponent,
    NavbarComponent,
    PieComponent,
    TablaComponent,
    ContactenosComponent,
    CorosComponent,
    CremacionesComponent,
    FloresComponent,
    SepeliosComponent,
    ServiciosComponent,
    TarifasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
