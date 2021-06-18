import { Routes } from '@angular/router';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { HomeComponent } from './components/home/home.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './_guards/auth-guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },
];
