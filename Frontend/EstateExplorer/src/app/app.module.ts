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
import{UserLoginComponent} from'./users/user-login/user-login.component';
import{UserRegisterComponent} from'./users/user-register/user-register.component';
import{PropertyDetailComponent} from'./Property/property-detail/property-detail.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path: '',component: PropertyListComponent},
  {path: 'rent-property',component: PropertyListComponent},
  {path: 'add-property',component: AddPropertyComponent},
  {path: 'property-detail/:id',component: PropertyDetailComponent },
  {path: 'user/login',component: UserLoginComponent },
  {path: 'user/register',component: UserRegisterComponent },
  {path: '**',component: PropertyListComponent}
]
@NgModule({
  declarations: [	
    AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
