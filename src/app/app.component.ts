import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from "rxjs";
import { products } from "../interfaces/products.interface";
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { product } from 'src/interfaces/singleproduct.interface';
@Component({
  selector: 'table-basic-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class TableBasicExample implements OnInit {
  private url = 'https://dummyjson.com/products';
  displayedColumns: string[] = ['image', 'brand', 'title', 'category', 'discountPercentage', 'price', 'rating', 'stock', 'satış adeti', 'düzenle'];
  data: product[] = []

  constructor(private httpClient: HttpClient, public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.reload()
    this.getPosts
  }

  openDialog(dialogData: product) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      height: '450px',
      maxWidth: '100vw',
      data: dialogData
    }
    )
  }
  getPosts(): Observable<products> {
    return this.httpClient.get<products>(this.url)
      .pipe(
        map((x:products) =>{
          for (let i = 0; i <x.products.length; i++) {
            x.products[i].soldedproduct=0;
          }
          return x
        }))
  }
  reload() {
    this.getPosts().subscribe(response => {
      this.data = response.products
      console.log(this.data)
    })
  }
}
