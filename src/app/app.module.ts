import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { ClientRoutingModule } from './client/client-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonInterceptor } from './common/interceptor/common.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {}
