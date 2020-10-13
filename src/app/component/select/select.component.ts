import {  Component, EventEmitter,Output} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

 
 @Output()selectOptionChanged : EventEmitter<Icon>;

  public selectOption : Icon[];
  public selectIcon : Icon;

  constructor(private iconService :IconService){
    this.selectOptionChanged = new EventEmitter();
    /**TODO */
  }

  updateValue(icon :Icon){
    /**TODO */
    this.selectOptionChanged.emit(icon)
  }

}