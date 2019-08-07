import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule
  ],
  declarations: [AddUserComponent, EditUserComponent, ListComponent, LoginComponent]
})
export class UserModule { }
