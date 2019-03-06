import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'; 
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizMultipleComponent } from './quiz-multiple/quiz-multiple.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { appRoutes } from './route';
import { NavbarCompComponent } from './navbar-comp/navbar-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizMultipleComponent,
    SignInComponentComponent,
    NavbarCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
