import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { RepeatPassWordValidator } from '../../../shared/repeatPassword';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    user: User;
    editForm: FormGroup;
    error;
    constructor(
        private formBuilder: FormBuilder,
        private router: ActivatedRoute,
        private userService: UserService,
        private location: Location,
    ) {}
    ngOnInit() {
        this.loadEditUser();
    }
    loadEditUser() {
        const userId = this.router.snapshot.paramMap.get('id');
        this.userService.getUserById(userId).subscribe(
            data => this.user = data,
            error => this.error = error,
        );
        if (!userId) {
            alert('Invalid action.');
            this.goBack();
            return;
        }
        this.userService.getUserById(userId)
            .subscribe( data => {
                this.editForm.setValue(data);
            });
        this.editForm = this.formBuilder.group({
            id: [],
            username: [Validators.required],
            password: [Validators.required],
            first_name: [Validators.required],
            last_name: [Validators.required],
            display_name: [Validators.required],
            email: [Validators.required],
            email_alt: [Validators.required],
            is_chairman: [Validators.required],
            is_admin: [Validators.required],
            status: [Validators.required],
            order: [Validators.required],
            language_use_in_email: [Validators.required]
        });
    }
    goBack(): void {
        this.location.back();
    }
    onSubmit(): void {
        this.userService.updateUser(this.editForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.goBack();
                },
                error => {
                    alert(error);
                });
    }

}
