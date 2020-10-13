import { Component, OnInit } from "@angular/core";
import { Icon } from "./model/icon.model";


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public selectedIndex: number;
 
  public selectedIcon : Icon;
  public paintedIcon :Icon;
 

  constructor() {
  }

  ngOnInit(): void {
  }


  paint() {
    this.paintedIcon = {...this.selectedIcon};
  }

  public selectionChanged(icon :Icon):void{
    this.selectedIcon = {...icon}
  }

}
