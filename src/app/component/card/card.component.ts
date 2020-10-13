import {  Component,Input } from "@angular/core";

import { Icon } from "../../model/icon.model";



@Component({
  selector: 'test-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent  {

  @Input() icon : Icon;
 

  constructor(){}

}