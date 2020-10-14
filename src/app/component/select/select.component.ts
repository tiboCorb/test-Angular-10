import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";

@Component({
  selector: "test-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent {
  public selectIcon: Icon;
  public selectOption: Observable<Icon[]>;

  constructor(private iconService: IconService) {
    this.selectOption = this.iconService.getIcon();
  }

  updateValue(icon: Icon) {
    this.iconService.selectedIcon.next(icon);
  }
}
