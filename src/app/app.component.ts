import { Component, OnInit } from "@angular/core";
import { Card } from "./model/card.model";
import { IconService } from "./service/icon.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public selectedIndex: number;
  public cards: Card[];

  constructor(private iconService: IconService) {
    this.selectedIndex = null;
    this.cards = [];
  }

  ngOnInit(): void {
    this.initCard();
  }

  select(index: number) {
    if (!this.cards[index].selected) {
      this!.cards.forEach(card => (card.selected = false));
      this.iconService.cardIndex.next(index);
      this.cards[index].selected = true;
    } else {
      this.iconService.cardIndex.next(null);
      this.cards[index].selected = false;
    }
  }

  paint() {
    const cardIndex = this.iconService.cardIndex.value;
    if (cardIndex !== null) {
      const currentCard = this.cards[cardIndex];
       this.cards[cardIndex] = {...currentCard,
        icon : this.iconService.selectedIcon.value,
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
