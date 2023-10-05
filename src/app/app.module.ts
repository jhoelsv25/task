import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {CdkMenuModule} from '@angular/cdk/menu';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    CdkMenuModule

],
})
export class AppModule {}
