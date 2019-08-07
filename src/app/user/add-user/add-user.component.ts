import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {UserService} from '../services/user.service';
import {User, languages, is_chairman, is_admin, status} from '../../user';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { usernameValidator, RepeatPassWordValidator } from '../../../shared/custom-validator';



@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    userFormGroup:  FormGroup;
    languages = languages;
    is_chairman = is_chairman;
    is_admin = is_admin;
    status = status;
    @Input() user: User;


    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location,
        private formBuilder: FormBuilder,
        ) {}
    ngOnInit() {
        this.createForm();
    }
    createForm() {

        this.userFormGroup = this.formBuilder.group({
            id: [],
            username: ['', [Validators.required , usernameValidator()]],
            password: ['', Validators.required],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            display_name: ['', Validators.required],
            email: ['', Validators.required],
            email_alt: ['', Validators.required],
            is_chairman: this.is_chairman[0],
            is_admin: this.is_admin[0],
            status: this.status[0],
            order: ['0', Validators.required],
            language_use_in_email: this.languages[0],
        });
    }
    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.userService.createUser(this.userFormGroup.value).subscribe( () => this.goBack());
    }
}
