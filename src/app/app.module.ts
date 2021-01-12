import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogcompComponent } from './logcomp/logcomp.component';
import { Routes, RouterModule } from '@angular/router';
import { ScreenComponent } from './screen/screen.component';
import { StateComponent } from './state/state.component';
import { NavbComponent } from './navb/navb.component';



const appRoutes: Routes =[
  { path: '', component: LogcompComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'state', component: StateComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogcompComponent,
    ScreenComponent,
    StateComponent,
    NavbComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

