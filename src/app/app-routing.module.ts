import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberAddComponent } from './member-add/member-add.component';
import { MemberEditComponent } from './member-edit/member-edit.component';
import { MemberGetComponent } from './member-get/member-get.component';
import { MemberDetailsComponent } from './member-details/member-details.component';

const routes: Routes = [
  {
    path: 'member/create',
    component: MemberAddComponent,
    data: { title: 'Add New Member' }
  },
  {
    path: 'edit/:id',
    component: MemberEditComponent,
    data: { title: 'Update Member' }
  },
  {
    path: 'members',
    component: MemberGetComponent,
    data: { title: 'List of Members' }
  },
  {
    path: 'details/:id',
    component: MemberDetailsComponent,
    data: { title: 'List of Members' }
  },
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
