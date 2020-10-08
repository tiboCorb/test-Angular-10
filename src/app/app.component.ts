import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { CardComponent } from './component/card/card.component';
import { IconService } from './service/icon.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChildren(CardComponent) cards: QueryList<CardComponent>


  constructor(private iconService :IconService){
  }

  select(index :number){
    const card =  this.cards.toArray()[index];

    if( !card.selected){
      this!.cards.forEach(card => card.selected = false)
      this.iconService.selectedCard.next(card)
      card.selected = true;
    }else {
         this.iconService.selectedCard.next(null)
          card.selected = false;
    }
  
  }

  paint(){
    const selectCard =  this.iconService.selectedCard.value;

    if(selectCard){
      selectCard.icon = {...this.iconService.selectedIcon.value}
      selectCard.selected = false;
    }
  }
 
}
