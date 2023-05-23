import { Component, OnInit } from '@angular/core';
import {Data, Router} from '@angular/router';
import { BooksService } from './books.service';
import { Datas } from './books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  data: Data[];


// llamamos a nuestro servicio
  constructor(private booksService: BooksService , private router: Router) {
    this.data = [];
   }

  ngOnInit(): void {
    this.llenarData();
  }
  delete(data:Data): void{
    console.log(data.id);
    this.booksService.delete(data.id).subscribe(
      res =>this.booksService.getAll().subscribe(
        response=>this.data=response
      )

    );
  }

  llenarData(){
    this.booksService.getAll().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

  addBook(){
    this.router.navigate([])
  }

}
