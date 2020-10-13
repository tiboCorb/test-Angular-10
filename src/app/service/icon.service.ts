import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';


@Injectable()
export class IconService {
   constructor(private http: HttpClient) {
    }
}