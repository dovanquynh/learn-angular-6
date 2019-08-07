import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user/services/user.service';
import {AppointmentService} from './appointment/services/appointment.service';
import {FullCalendarModule} from 'ng-fullcalendar';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        FullCalendarModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    ],
    providers: [
        UserService,
        AppointmentService
    ],
    bootstrap: [AppComponent],
    exports: [AppComponent]
})
export class AppModule {
}

