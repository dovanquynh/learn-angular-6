import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { ListComponent } from './user/list/list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { LoginComponent } from './user/login/login.component';
import { ScheduleComponent } from './appointment/schedule/schedule.component';
import { CreateReservationComponent } from './appointment/create-reservation/create-reservation.component';
import { MainSettingComponent } from './shared/main-setting/main-setting.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultLayoutComponent} from './shared/default-layout/default-layout.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from 'ng-fullcalendar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import 'flatpickr/dist/flatpickr.css';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
} from '@angular/material';
const routes: Routes = [
    {
        path: 'users/login',
        component: LoginComponent
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'users', component: ListComponent },
            { path: 'users/list', component: ListComponent },
            { path: 'users/add', component: AddUserComponent },
            { path: 'users/edit/:id', component: EditUserComponent },
            { path: 'appointments', component: ScheduleComponent },
            { path: 'create-appointment', component: CreateReservationComponent },
            { path: 'settings', component: MainSettingComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        FullCalendarModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        DefaultLayoutComponent,
        HomeComponent,
        ListComponent,
        AddUserComponent,
        EditUserComponent,
        LoginComponent,
        ScheduleComponent,
        CreateReservationComponent,
        MainSettingComponent,
        PageNotFoundComponent,
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
