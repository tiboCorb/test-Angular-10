import {  Component} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

 public selectOption : Icon[];
 public selectIcon : Icon;



  constructor(private iconService :IconService){
    /**
     * TODO
     */
    this.iconService.getIcon().subscribe( (icons: Icon[]) => {
      this.selectOption = [...icons] 
    })
  }

  updateValue(icon :Icon){
    /**TODO */
    this.iconService.selectedIcon = {...icon}
  }

}