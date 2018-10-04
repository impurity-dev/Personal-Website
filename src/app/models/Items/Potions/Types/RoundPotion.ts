import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";

/**
 * A pink potion
 */
export class RoundPotion extends Potion {

  // The route of this type
  public static Route = "round/";

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(RoundPotion.Route + color, "Mana Potion");
    this.color = color;
  }

}
