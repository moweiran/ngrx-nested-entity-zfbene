import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  articleAdded,
  articleDecremented,
  articleIncremented,
  Customer,
  customersLoaded,
  customersSelectors,
  createCustomer,
  articlesSelectors,
  customerArticlesSelectors
} from './reducer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers$ = this.store.select(customersSelectors.selectAll);

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers() {
    this.store.dispatch(
      customersLoaded({
        customers: [
          createCustomer(),
          createCustomer(),
          createCustomer(),
          createCustomer(),
          createCustomer()
        ]
      })
    );
  }

  addArticle(customerId: number, skuElement: HTMLInputElement) {
    if (!skuElement.value) return;
    this.store.dispatch(
      articleAdded({ customerId, articleSku: skuElement.value })
    );
    skuElement.value = '';
  }

  increment(customerId: number, articleSku: string) {
    if (!articleSku) return;
    this.store.dispatch(articleIncremented({ customerId, articleSku }));
  }

  decrement(customerId: number, articleSku: string) {
    if (!articleSku) return;
    this.store.dispatch(articleDecremented({ customerId, articleSku }));
  }
}
