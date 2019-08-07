import {Inject, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Appointment} from '../../appointment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class AppointmentService {
    private Url = 'http://localhost:3000/reservation';

    constructor(
        private http: HttpClient
    ) {
    }

    getEvents(): Observable<Appointment[]> {
        return this.http.get<Appointment[]>(this.Url).pipe(
            catchError(error => of([])));
    }

    getEventById(id: string): Observable<Appointment> {
        const url = `${this.Url}/${id}`;
        return this.http.get<Appointment>(url);
    }

    create(newAppointment: Appointment): Observable<Appointment> {
        return this.http.post<Appointment>(this.Url, newAppointment, httpOptions);
    }

    deleteEvent(eventId: Appointment | number): Observable<Appointment> {
        const id = typeof eventId === 'number' ? eventId : eventId.id;
        const url = `${this.Url}/${id}`;
        return this
            .http
            .delete<Appointment>(url, httpOptions).pipe(
                tap(_ => console.log(`delete users with id = ${id}`)),
                catchError(error => of(null))
            );
    }

    updateEvent(data: Appointment): Observable<Appointment> {
        const id = typeof data === 'number' ? data : data.id;
        const editEvent = `${this.Url}/${id}`;
        return this
            .http
            .put<Appointment>(editEvent, data, httpOptions);
    }
}
