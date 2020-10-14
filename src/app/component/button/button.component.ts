import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component
} from "@angular/core";

@Component({
  selector: "test-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  constructor(private cdr: ChangeDetectorRef) {}
}
