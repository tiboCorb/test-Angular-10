import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Icon } from "../model/icon.model";

@Injectable({ providedIn: "root" })
export class IconService {
  constructor(private http: HttpClient) {}

  public getIcon(): Observable<Icon[]> {
    return this.http.get<Icon[]>("../../../assets/icons.json");
  }
}
