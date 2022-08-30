import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { RoutingRoutingModule } from '../../../HttpServices/src/app/routing-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UserFormComponent } from './user-form/user-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HandleErrorInterceptor } from '../../../HttpServices/src/app/interceptor/handle-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    UserFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    RoutingRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HandleErrorInterceptor,
      // multi: true : mean that we tell angular that it may be more an inerceptor class use "multiple classes"
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
