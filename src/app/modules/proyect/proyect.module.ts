import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectRoutingModule } from './proyect-routing.module';
import { NavComponent } from './layouts/nav/nav.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksComponent } from './components/reports/tasks/tasks.component';
import { TeamComponent } from './components/reports/team/team.component';
import { PendientComponent } from './components/drag-y-drop/pendient/pendient.component';
import { TaskListComponent } from './pages/proyects/task-list/task-list.component';
import { TeamListComponent } from './pages/teams/team-list/team-list.component';
import { FriendListComponent } from './pages/friends/friend-list/friend-list.component';
import { TeamCardComponent } from './components/cards/team-card/team-card.component';
import { FriendCardComponent } from './components/cards/friend-card/friend-card.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ProgressComponent } from './components/drag-y-drop/progress/progress.component';
import { FinishedComponent } from './components/drag-y-drop/finished/finished.component';
import { FriendAddComponent } from './pages/friends/friend-add/friend-add.component';
import { TaskAddComponent } from './pages/proyects/task-add/task-add.component';
import { TeamAddComponent } from './pages/teams/team-add/team-add.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CardReportTaskComponent } from './components/reports/cards/card-report-task/card-report-task.component';
import { CardReportTeamComponent } from './components/reports/cards/card-report-team/card-report-team.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CdkMenuModule} from '@angular/cdk/menu';
import { DialogModule} from '@angular/cdk/dialog';
import { FormTaskComponent } from './components/forms/form-task/form-task.component';
import { FormTeamComponent } from './components/forms/form-team/form-team.component';



@NgModule({
    declarations: [
        NavComponent,
        HeaderComponent,
        HomeComponent,
        DashboardComponent,
        TasksComponent,
        TeamComponent,
        PendientComponent,
        TaskListComponent,
        TeamListComponent,
        FriendListComponent,
        TeamCardComponent,
        FriendCardComponent,
        AnalyticsComponent,
        ProgressComponent,
        FinishedComponent,
        FriendAddComponent,
        TaskAddComponent,
        TeamAddComponent,
        CardReportTaskComponent,
        CardReportTeamComponent,
        FormTaskComponent,
        FormTeamComponent
    ],

    imports: [
        CommonModule,
        ProyectRoutingModule,
        SharedModule,
        DragDropModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        CdkMenuModule,
        DialogModule
    ],
    providers:[

    ]
})
export class ProyectModule { }
