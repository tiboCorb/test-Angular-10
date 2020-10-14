import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Icon } from "../model/icon.model";

@Injectable({ providedIn: "root" })
export class IconService {
  /**TODO */
  public cardIndex: number;
  public selectedIcon: Icon;

  constructor(private http: HttpClient) {
    /**TODO */
    this.cardIndex = null;
    this.selectedIcon = null;
  }

  public getIcon(): Observable<Icon[]> {
    return this.http.get<Icon[]>("../../../assets/icons.json");
  }
}
