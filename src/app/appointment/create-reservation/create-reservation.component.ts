import {Component, Input, OnInit} from '@angular/core';
import {Appointment, rooms} from '../../appointment';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppointmentService} from '../services/appointment.service';

@Component({
    selector: 'app-create-reservation',
    templateUrl: './create-reservation.component.html',
    styleUrls: ['./create-reservation.component.scss']
})
export class CreateReservationComponent implements OnInit {
    @Input() appointment: Appointment;
    rooms = rooms;
    formGroup: FormGroup;

    constructor(
        private appointmentService: AppointmentService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
    ) {
    }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.formGroup = this.formBuilder.group({
            rooms: this.rooms[0],
            meeting: ['', Validators.required],
            mode: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            agenda: ['', Validators.required],
            notice: ['', Validators.required],
        });
    }
    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.appointmentService.create(this.formGroup.value).subscribe( () => this.goBack());
    }

}
