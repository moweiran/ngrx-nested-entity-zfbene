import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { customersReducer } from "./reducer";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      customers: customersReducer
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
