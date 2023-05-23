import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AddBookComponent } from './home/add-book/add-book.component';
import { EditBookComponent } from './home/edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';




const routes: Routes =[
  {path: '', redirectTo:'/books', pathMatch:'full'},
  {path: 'books', component:HomeComponent},
  {path: 'books/add', component:AddBookComponent},
  {path: 'books/edit/:id', component:EditBookComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBookComponent,
    EditBookComponent,


    // AddBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // importamos Http para hacer las consultas
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
