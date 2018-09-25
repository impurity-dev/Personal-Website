import {Potion} from "./Potion";

/**
 * A green potion
 */
export class GreenPotion extends Potion {
  /**
   * Creates the default Green Potion and sets the required name and resource name
   */
  constructor() {
    super("Green", "Stamina Potion");
  }
}
