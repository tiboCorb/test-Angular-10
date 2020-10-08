import {  Component } from "@angular/core";
import { Icons } from "../../model/icons";


@Component({
  selector: 'test-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  public icon : Icons;
  public selected : boolean

  constructor(){}

}