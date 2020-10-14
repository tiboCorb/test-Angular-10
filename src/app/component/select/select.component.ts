import { Component, EventEmitter, Output } from "@angular/core";
import { Icon } from "../../model/icon.model";
import { IconService } from "../../service/icon.service";

@Component({
  selector: "test-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"]
})
export class SelectComponent {
  @Output() selectOptionChanged: EventEmitter<Icon>;

  public selectOption: Icon[];
  public selectIcon: Icon;

  constructor(private iconService: IconService) {
    this.selectOptionChanged = new EventEmitter();
    this.iconService.getIcon().subscribe((icons: Icon[]) => {
      this.selectOption = [...icons];
    });
  }

  updateValue(icon: Icon) {
    this.selectOptionChanged.emit(icon);
  }

}
