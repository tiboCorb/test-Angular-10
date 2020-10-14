import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { CardComponent } from "../component/card/card.component";
import { Icons } from "../model/icons";

@Injectable({ providedIn: "root" })
export class IconService {
  public selectedCard: BehaviorSubject<CardComponent>;
  public selectedIcon: BehaviorSubject<Icons>;

  constructor(private http: HttpClient) {
    this.selectedCard = new BehaviorSubject(null);
    this.selectedIcon = new BehaviorSubject(null);
  }

  public getIcon(): Observable<Icons[]> {
    return this.http.get<Icons[]>("../../../assets/icons.json");
  }
}
