import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent  {

  public icon : Icon;

  constructor(public iconService : IconService, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.iconService?.selectedIcon?.subscribe(icon => {
      this.icon = icon
      this.cdr.detectChanges();
      });
  }
}