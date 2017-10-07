import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(@Inject(ActivatedRoute) private aRouter: ActivatedRoute) { }

  ngOnInit() {
    this.aRouter.params.subscribe((query) => {
      console.log(query['id']);
    });
  }

}
