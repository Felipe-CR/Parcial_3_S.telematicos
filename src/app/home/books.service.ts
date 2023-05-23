import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Datas } from './books';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { BookData } from '../modelos/books.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private urlApi = 'http://192.168.50.8:5000/books';

  constructor( private http: HttpClient) { }
// metodo para traer todo los datos
  getAll():Observable<Data[]>{
    return this.http.get<Data[]>(this.urlApi);
  }

  //crear libro
create(data: Data):Observable<Data>{
  return this.http.post<Data>(this.urlApi, data);
}
 //obtener un libro segun id
 getById(id: number):Observable<Data>{
  return this.http.get<Data>(this.urlApi+'/'+ id);
}
//update un bo
update(id:number, form: BookData):Observable<BookData>{

  return this.http.put<BookData>(this.urlApi+'/'+ id, form);
}
//eliminar book
delete(id: number):Observable<Data>{
  return this.http.delete<Data>(this.urlApi+'/'+id);
}



}
