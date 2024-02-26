import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
   // selector : "[app-product]",
    // selector : ".app-product",
  templateUrl: './product.component.html',
  // template : `<p>This is product <strong>{{productName}}</strong> with id <strong>{{productId}}</strong></p>`,

  styleUrls: ['./product.component.scss']
  // styles : [`p{
    //     padding: 20px;
    //     border: 2px solid #ededed;
    //     background-color: #eee;
    // }`]
})
export class ProductComponent implements OnInit, OnDestroy {
  productName : string = "Samsung";
  productId : string = "P-123";
  productStatus : string = "Dispatched";
  res : string = `<strong>I Love Angular</strong>`;
  isProductAvailable !: boolean;


  constructor() { }

  ngOnInit(): void {
   
    console.log("The Product Component is INIT");
    this.isProductAvailable = Math.random() >= .5 ? true : false
    console.log(this.isProductAvailable)

  }
  getBg(){
    return this.isProductAvailable ? 'orange' : '#ededed'

  }
  ngOnDestroy(){

  }

}
