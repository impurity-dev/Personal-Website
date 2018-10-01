import { ArmorType } from "../enums/ArmorType";
import { Armor } from "../models/Items/Armor";

/**
 * Armor factory will create any armor based off armortype enum
 */
export class ArmorFactory {

  /**
   * Create any Armor based off type
   * @param type Armor to be created
   */
  public static Create(type: ArmorType): Armor {

    return null;
  }
}
