import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";

/**
 * A green potion
 */
export class RectanglePotion extends Potion {

  // The route of this type
  public static Route = "rectangle/";

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(RectanglePotion.Route + color, "Mana Potion");
    this.color = color;
  }

}
