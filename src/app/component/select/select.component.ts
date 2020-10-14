import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Icons } from "../../model/icons";
import { IconService } from "../../service/icon.service";

@Component({
  selector: "test-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent {
  public selectIcon: Icons;
  public selectOption: Observable<Icons[]>;

  constructor(private iconService: IconService) {
    this.selectOption = this.iconService.getIcon();
  }

  updateValue(icon: Icons) {
    this.iconService.selectedIcon.next(icon);
  }
}
