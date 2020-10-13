import {  Component, EventEmitter,Output, Input} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {


 @Input() selectOption : Icon[];
 @Output() selectOptionChanged : EventEmitter<Icon>;
 public selectIcon : Icon;



  constructor(private iconService :IconService){
    /**
     * TODO
     */
    this.selectOptionChanged = new EventEmitter();
    this.iconService.getIcon().subscribe( (icons: Icon[]) => {
      this.selectOption = [...icons] 
    })
  }

  updateValue(icon :Icon){
    /**TODO */
    this.iconService.selectedIcon = icon;
    this.selectOptionChanged.emit(icon)
  }

}