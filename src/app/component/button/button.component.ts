import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges,Input} from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";


@Component({
  selector: 'test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges  {
  /**TODO */
  @Input() icon : Icon;

  constructor(public iconService : IconService, private cdr: ChangeDetectorRef){}

/**TODO */
ngOnChanges(): void {
  this.cdr.detectChanges()
}

  
}