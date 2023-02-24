import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TypeUser } from '../model/type-user';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class TypeUserService {

  UrlType: string="http://localhost:8080/typeuser";

  constructor(private http:HttpClient) { }

  //Get
  getTypeUser():Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.UrlType+"/getTypes")
  }

  getTypeUserById(id:number):Observable<TypeUser>{
    return this.http.get<TypeUser>(this.UrlType+"/getType/"+id)
  }

  //Post
  createTypeUser(type:TypeUser):Observable<TypeUser>{
    return this.http.post<TypeUser>
    (this.UrlType+"/createType",type)
    .pipe(catchError(this.handleError));
  }

  //Put
  updateTypeUser(type:TypeUser):Observable<TypeUser>{
    return this.http.put<TypeUser>
    (this.UrlType+"/updateType/"+type.id,type)
    
  }

  //Delete
  deleteType(id:number):Observable<any>{
    return this.http.delete<any>(this.UrlType+"/deleteType/"+id)
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
