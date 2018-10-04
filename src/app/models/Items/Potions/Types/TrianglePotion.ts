import {Potion} from "../Potion";
import { PotionColor } from "../../../../enums/Potions/PotionColor";


/**
 * A yellow potion
 */
export class TrianglePotion extends Potion {

  // The route of this type
  public static Route = "triangle/";

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   * @param color is the color within this potion
   */
  constructor(color: PotionColor) {
    super(TrianglePotion.Route + color, "Mana Potion");
    this.color = color;
  }

}
