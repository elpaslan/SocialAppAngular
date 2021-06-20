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
import { JwtModule } from '@auth0/angular-jwt';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { PhotoGalleryComponent } from './components/photo-gallery/photo-gallery.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { TimeagoModule } from 'ngx-timeago';
import { MemberDetailsResolver } from './_resolvers/member-details.resolver';
import { NgxLoadingModule } from 'ngx-loading';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageCreateComponent } from './components/messages/message-create/message-create.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    MemberDetailsComponent,
    PhotoGalleryComponent,
    MemberEditComponent,
    MessageCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    TimeagoModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:44329'],
        disallowedRoutes: ['localhost:44329/api/auth'],
      },
    }),
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    MemberEditResolver,
    MemberDetailsResolver,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
