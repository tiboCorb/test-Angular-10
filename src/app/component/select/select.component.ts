import {  Component} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

 public selectIcon : Icon;
 public selectOption : Icon[];


  constructor(private iconService :IconService){
    this.iconService.getIcon().subscribe( (icons: Icon[]) => {
      this.selectOption = [...icons] 
    })
  }

  updateValue(icon :Icon){
    this.iconService.selectedIcon.next(icon);

  }

}