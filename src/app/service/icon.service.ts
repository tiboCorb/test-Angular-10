import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icon } from '../model/icon.model';


@Injectable({providedIn:"root"})
export class IconService {

  /**TODO */

   constructor(private http: HttpClient) {
     /**TODO */
    }

    public getIcon(): Observable<Icon[]> {
        return this.http.get("../../../assets/icons.json") as Observable<Icon[]>;
    }
}