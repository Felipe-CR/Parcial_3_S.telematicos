import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Datas } from '../books';
import { BookData } from 'src/app/modelos/books.interface';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {


  constructor(private bookService: BooksService, private router:Router, private activerouter: ActivatedRoute) {

}
  datosBooks!: BookData;


   editarBooks=new FormGroup({
    author: new FormControl(''),
    description: new FormControl(''),
    title: new FormControl(''),
    id: new FormControl(),
});

  ngOnInit(): void {
    let dataId = this.activerouter.snapshot.paramMap.get('id');
    console.log(dataId);
    let Id:number= parseInt(dataId);
    this.bookService.getById(Id).subscribe(e =>{

       if (Array.isArray(e) && e.length > 0) {
      this.datosBooks = e[0];
      this.editarBooks.setValue({
        'author': this.datosBooks.author,
        'description': this.datosBooks.description,
        'title': this.datosBooks.title,
        'id': dataId,
      });


    }


    });


  }

  postForm(){
    const form = this.editarBooks.value;
    const bookId: number = this.activerouter.snapshot.params['id'] || 0;
    this.bookService.update(bookId, form).subscribe(
      e=> this.router.navigate(['/books'])
    );
    const json = JSON.stringify(form);
      console.log(json);

    }
  }



