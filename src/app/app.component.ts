import { Component, OnInit } from "@angular/core";
import { Card } from "./model/card.model";
import { Icon } from "./model/icon.model";
import { IconService } from "./service/icon.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public selectedIndex: number;
  public cards: Card[];

  constructor(public iconService: IconService) {
    this.selectedIndex = null;
    this.cards = [];
  }

  ngOnInit(): void {
    this.initCard();
  }

  select(index: number) {
    /**TODO */
    if (!this.cards[index].selected) {
      this!.cards.forEach(card => (card.selected = false));
      this.iconService.cardIndex = index;
      this.cards[index].selected = true;
    } else {
      this.iconService.cardIndex = null;
      this.cards[index].selected = false;
    }
  }

  paint() {
    /**TODO */
    const cardIndex = this.iconService.cardIndex;
    if (cardIndex !== null) {
      const currentCard = this.cards[cardIndex];
       this.cards[cardIndex] = {...currentCard,
        icon : this.iconService.selectedIcon,
        selected :false,
        date: new Date()
       }
    }
  }



  private initCard() {
    for (let i = 0; i < 3; i++) {
      this.cards.push({});
    }
  }
}
