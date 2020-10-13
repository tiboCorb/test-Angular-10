import { ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";


@Component({
  selector: 'test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent   {
  /**TODO */
 
  constructor(private cdr: ChangeDetectorRef){}

/**TODO */

}