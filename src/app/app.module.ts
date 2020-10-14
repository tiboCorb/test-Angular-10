import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./component/button/button.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SelectComponent } from "./component/select/select.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from "./component/card/card.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [AppComponent, ButtonComponent, SelectComponent, CardComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
