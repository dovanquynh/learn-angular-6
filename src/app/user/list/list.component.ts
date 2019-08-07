import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../../user';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getUser();
    }
    getUser(): void {
        this.userService.getUsers().subscribe((updateUser) => this.users = updateUser);
    }

    deleteUser(user: User): void {
        this.users = this.users.filter(u => u !== user);
        this.userService.deleteUser(user.id).subscribe();
    }

}
