import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateReservationComponent} from './create-reservation/create-reservation.component';
import {EditReservationComponent} from './edit-reservation/edit-reservation.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'angular-calendar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {FlatpickrModule} from 'angularx-flatpickr';
import { FullCalendarModule } from 'ng-fullcalendar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {AppointmentService} from './services/appointment.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModalModule.forRoot(),
        FlatpickrModule.forRoot(),
        CalendarModule.forRoot(),
        FullCalendarModule,
        OwlDateTimeModule,
        BrowserAnimationsModule
    ],
    declarations: [CreateReservationComponent, EditReservationComponent, ScheduleComponent],
    providers: [AppointmentService],
    exports: [ScheduleComponent],
})
export class AppointmentModule {
}

