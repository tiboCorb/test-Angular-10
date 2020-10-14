import { Component, OnInit } from "@angular/core";
import { Icon } from "./model/icon.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public selectedIndex: number;

  public selectedIcon: Icon;
  public paintedIcon: Icon;

  constructor() {
    this.selectedIndex = null;
    this.selectedIcon = null;
  }

  ngOnInit(): void {
    this.initCard(3);
  }

  select(index: number) {
    /**TODO */
  }

  paint() {
    /**TODO */
    this.paintedIcon = { ...this.selectedIcon };
  }

  public selectionChanged(icon: Icon): void {
    this.selectedIcon = { ...icon };
  }

  private initCard(numberOfCard: number) {
    /**TODO */
  }
}
