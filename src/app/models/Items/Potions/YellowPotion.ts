import {Potion} from "./Potion";


/**
 * A yellow potion
 */
export class YellowPotion extends Potion {
  /**
   * Creates the default Yellow Potion and sets the required name and resource name
   */
  constructor() {
    super("Yellow", "Lucky Potion");
  }
}
