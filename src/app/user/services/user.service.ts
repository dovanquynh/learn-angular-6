import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from '../../user';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userUrl = 'http://localhost:3000/user';

    constructor(
        private http: HttpClient
    ) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.userUrl);
    }

    getUserById(id: string): Observable<User> {
        const url = `${this.userUrl}/${id}`;
        return this.http.get<User>(url);
    }

    createUser(newUser: User): Observable<User> {
        return this.http.post<User>(this.userUrl, newUser, httpOptions);
    }

    deleteUser(user: User | number): Observable<User> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.userUrl}/${id}`;
        return this.http.delete<User>(url, httpOptions);
    }

    updateUser(user: User): Observable<User> {
        const id = typeof user === 'number' ? user : user.id;
        const url = `${this.userUrl}/${id}`;
        return this
            .http
            .put<User>(url, user, httpOptions);
    }
}
