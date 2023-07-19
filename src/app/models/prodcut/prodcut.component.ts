import { Component, Input, OnInit } from '@angular/core';
import Product from '../product';

@Component({
  selector: 'app-prodcut',
  templateUrl: './prodcut.component.html',
  styleUrls: ['./prodcut.component.css']
})
export class ProductComponent implements OnInit {

// decorate the 'data' property with @Input(); the values will come from the parent
@Input() data: Product = {
  productId:0,
  imageUrl: '',
  productName: '',
  price: 0,
  brand: '',
  rating: 0,
  numOfReviews: 0,
  description: '',
  //favorite: false,
  organic:false,
  tags: []
  };

  ngOnInit(): void {
    
  }

}
