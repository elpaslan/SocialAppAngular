import { Routes } from '@angular/router';
import { FriendListComponent } from './components/friend-list/friend-list.component';
import { HomeComponent } from './components/home/home.component';
import { MemberDetailsComponent } from './components/member-details/member-details.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './_guards/auth-guard';
import { MemberDetailsResolver } from './_resolvers/member-details.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
  {
    path: 'member/edit',
    component: MemberEditComponent,
    resolve: { user: MemberEditResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent,
    resolve: { user: MemberDetailsResolver },
    canActivate: [AuthGuard],
  },

  { path: 'friends', component: FriendListComponent, canActivate: [AuthGuard] },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent },
];
