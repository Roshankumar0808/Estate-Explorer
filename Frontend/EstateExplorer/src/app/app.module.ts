import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import{HttpClientModule}from '@angular/common/http'
import { HousingService } from './services/housing.service';
import{AddPropertyComponent} from'./Property/add-property/add-property.component';

const appRoutes:Routes=[
  {path: '',component: PropertyListComponent},
  {path: 'add-property',component: AddPropertyComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
