import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";
import { ImageRoutes } from "src/app/constants/ImageRoutes";

/**
 * A blue potion
 */
export class TubePotion extends Potion {
  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(ImageRoutes.TUBE + color, "Mana Potion");
    this.color = color;
  }

}
