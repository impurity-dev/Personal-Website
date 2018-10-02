import { WeaponType } from "../enums/WeaponType";
import { Weapon } from "../models/Items/Weapon";

/**
 * Weapon factory will create any weapon based off weapontype enum
 */
export class WeaponFactory {

  /**
   * Create any weapon based off type
   * @param type Weapon to be created
   */
  public static Create(type: WeaponType): Weapon {

    return null;
  }
}
