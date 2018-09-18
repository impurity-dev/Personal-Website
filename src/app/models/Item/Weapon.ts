import {Item} from "./Item";

export class Weapon extends Item {

  public Item(imagePath: string, name: string) {
    this.imagePath = imagePath;
    this.name = name;
  }

}
