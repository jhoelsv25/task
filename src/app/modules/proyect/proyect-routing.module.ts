import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './layouts/home/home.component';
import { TaskListComponent } from './pages/proyects/task-list/task-list.component';
import { TeamListComponent } from './pages/teams/team-list/team-list.component';
import { FriendListComponent } from './pages/friends/friend-list/friend-list.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
      },
      {
        path: 'task-list',
        component: TaskListComponent,
        title: 'Proyects',
      },
      {
        path:'teams',
        component:TeamListComponent,
        title:'Team'
      },
      {
        path:'friends',
        component:FriendListComponent,
        title:'Friend'
      },
      {
        path:'analytics',
        component:AnalyticsComponent,
        title:'Analytics'
      },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectRoutingModule {}
