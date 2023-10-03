import { AppRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

// Modules
import { TarefasComponent } from './tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
