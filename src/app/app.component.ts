import { Component, OnInit } from "@angular/core";
import { Card } from "./model/card.model";
import { Icon } from "./model/icon.model";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public cards: Card[];
  public selectedIcon: Icon;
  public cardIndex: number;

  constructor() {
    this.selectedIcon = null;
    this.cardIndex = null;
    this.cards = [];
  }

  ngOnInit(): void {
    this.initCard(3);
  }

  select(index: number) {
    if (!this.cards[index].selected) {
      this.cards.forEach(card => (card.selected = false));
      this.cardIndex = index;
      this.cards[index].selected = true;
    } else {
      this.cardIndex = null;
      this.cards[index].selected = false;
    }
  }

  paint() {
    /**TODO */
    if (this.cardIndex !== null) {
      const currentCard = this.cards[this.cardIndex];
      this.cards[this.cardIndex] = {
        ...currentCard,
        icon: this.selectedIcon,
        selected: false
      };
    }
  }

  public selectionChanged(icon: Icon): void {
    this.selectedIcon = { ...icon };
  }

  private initCard(numberOfcard: number) {
    for (let i = 0; i < numberOfcard; i++) {
      this.cards.push({});
    }
  }
}
