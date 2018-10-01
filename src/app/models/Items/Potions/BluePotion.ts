import {Potion} from "./Potion";
import { PotionType } from "../../../enums/PotionType";

/**
 * A blue potion
 */
export class BluePotion extends Potion {

  /**
   * Creates the default Blue Potion and sets the required name and resource name
   */
  constructor() {
    super(PotionType.Blue, "Mana Potion");
  }
}
