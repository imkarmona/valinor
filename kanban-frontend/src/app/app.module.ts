import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColumnComponent } from './Components/column/column.component';
import { TaskComponent } from './Components/task/task.component';
import { HomeComponent } from './Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TaskComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
