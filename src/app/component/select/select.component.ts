import {  Component} from "@angular/core";
import { Icons } from "../../model/icons";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

 public selectIcon : Icons;
 public selectOption : Icons[];


  constructor(private iconService :IconService){
    this.iconService.getIcon().subscribe( (icons: Icons[]) => {
      this.selectOption = [...icons] 
    })
  }

  updateValue(icon :Icons){
    this.iconService.selectedIcon.next(icon);

  }

}