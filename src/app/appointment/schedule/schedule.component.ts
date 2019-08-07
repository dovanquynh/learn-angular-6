import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ng-fullcalendar';
import {AppointmentService} from '../services/appointment.service';
import {Options} from 'fullcalendar';
import { DateTimeAdapter } from 'ng-pick-datetime';


@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
    public selectedMoment = new Date();
    calendarOptions: Options;
    displayEvent: any;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

    constructor(
        protected appointmentService: AppointmentService,
        dateTimeAdapter: DateTimeAdapter<any>) {
        dateTimeAdapter.setLocale('ja-JP');
    }

    ngOnInit() {
        this.appointmentService.getEvents().subscribe(data => {
            this.calendarOptions = {
                editable: true,
                eventLimit: false,
                selectable: true,
                locale: 'ja',
                header: {
                    left: 'prev,next,today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listMonth'
                },
                // buttonText: {
                //     prev: '前',
                //     next: '次',
                //     today: '今日',
                //     month: '月',
                //     // agendaWeek: '週',
                //     agendaDay: '日',
                //     listMonth: '予定一覧',
                // },
                events: data,
            };
        });
    }

    clickButton(model: any) {
        this.displayEvent = model;
    }

    eventClick(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title,
                allDay: model.event.allDay
                // other params
            },
            duration: {}
        };
        this.displayEvent = model;
    }

    updateEvent(model: any) {
        model = {
            event: {
                id: model.event.id,
                start: model.event.start,
                end: model.event.end,
                title: model.event.title
                // other params
            },
            duration: {
                _data: model.duration._data
            }
        };
        this.displayEvent = model;
    }

    dayClick(date) {
        alert(date.date.format('YYYY-MM-DD HH:mm'));
    }
    select(date) {
        console.log(date.start.format('YYYY-MM-DD HH:mm') + ' ===> ' + date.end.format());
        // alert(date.start.format('YYYY-MM-DD HH:mm') + ' ===> ' + date.end.format('YYYY-MM-DD HH:mm'));
    }
}

