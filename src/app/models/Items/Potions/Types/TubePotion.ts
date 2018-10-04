import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";

/**
 * A blue potion
 */
export class TubePotion extends Potion {

  // The route of this type
  public static Route = "tube/";

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(TubePotion.Route + color, "Mana Potion");
    this.color = color;
  }

}
