import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth-guard';
import { ErrorInterceptor } from './services/error.intercaptor';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    RegisterComponent,
    MemberListComponent,
    FriendListComponent,
    HomeComponent,
    MessagesComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
