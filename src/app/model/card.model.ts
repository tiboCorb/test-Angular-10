import { Icon } from "./icon.model";


export interface Card{
  selected?:boolean,
  icon ?: Icon,
  date ?:Date,
}