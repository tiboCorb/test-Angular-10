import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Icon } from '../model/icon.model';


@Injectable({providedIn:"root"})
export class IconService {

   public cardIndex : BehaviorSubject<number>;
   public selectedIcon : BehaviorSubject<Icon>;

   constructor(private http: HttpClient) {
     this.cardIndex = new BehaviorSubject(null);
     this.selectedIcon = new BehaviorSubject(null);
    }

    public getIcon(): Observable<Icon[]> {
        return this.http.get("../../../assets/icons.json") as Observable<Icon[]>;
    }
}