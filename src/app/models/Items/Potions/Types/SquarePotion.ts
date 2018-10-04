import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";


/**
 * A purple potion
 */
export class SquarePotion extends Potion {

  // The route of this type
  public static Route = "square/";

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(SquarePotion.Route + color, "Mana Potion");
    this.color = color;
  }

}
