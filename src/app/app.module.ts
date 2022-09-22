import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KirbyModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'da-DK' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
