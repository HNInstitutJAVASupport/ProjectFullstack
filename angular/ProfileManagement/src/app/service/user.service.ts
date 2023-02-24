import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TypeUser } from '../model/type-user';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UrlUser: string="http://localhost:8080/users";
  

  constructor(private http:HttpClient) { }

  //Get
  getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.UrlUser+"/getUsers")
  }

  getUserById(id:number):Observable<User> {
    return this.http.get<User>(this.UrlUser+"/getUser/"+id)
  }

  //Post

  createUser(user:User):Observable<User> {
    return this.http.post<User>(this.UrlUser+"/createUser",user)
  }


  //Put
  updateUser(user:User):Observable<User>{
    return this.http.put<User>(this.UrlUser+"/updateUser/"+user.id,user)
  }

  //Delete

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlUser+"/deleteUser/"+id)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
