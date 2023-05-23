import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Datas } from '../books';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  data: Data = new Datas();





  constructor( private bookService: BooksService, private router:Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
    // cargar los datos del libro para editar
  cargar(data: Datas):void{
    console.log(data.id);
    this.activateRoute.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.bookService.getById(id).subscribe(
            es => this.data=es

          );

        }
      }
    );

  }
  create():void{
    console.log(this.data);
    this.bookService.create(this.data).subscribe(
      res => this.router.navigate(['/books'])
    );
    const json = JSON.stringify(this.data);
    console.log(json);
  }




}





