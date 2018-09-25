import {Potion} from "./Potion";

/**
 * A blue potion
 */
export class BluePotion extends Potion {
  /**
   * Creates the default Blue Potion and sets the required name and resource name
   */
  constructor() {
    super("Blue", "Mana Potion");
  }
}
