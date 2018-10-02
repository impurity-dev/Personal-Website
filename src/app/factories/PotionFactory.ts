import { PotionType } from "../enums/PotionType";
import { Potion } from "../models/Items/Potions/Potion";
import { BluePotion } from "../models/Items/Potions/BluePotion";
import { YellowPotion } from "../models/Items/Potions/YellowPotion";
import { GreenPotion } from "../models/Items/Potions/GreenPotion";
import { PinkPotion } from "../models/Items/Potions/PinkPotion";
import { PurplePotion } from "../models/Items/Potions/PurplePotion";

/**
 * Potion factory will create any potion based off potiontype enum
 */
export class PotionFactory {

  /**
   * Create any potion based off type
   * @param type Potion to be created
   */
  public static Create(type: PotionType): Potion {
    switch (type) {
      case PotionType.Blue: return new BluePotion();
      case PotionType.Yellow: return new YellowPotion();
      case PotionType.Green: return new GreenPotion();
      case PotionType.Pink: return new PinkPotion();
      case PotionType.Purple: return new PurplePotion();
    }

    return null;
  }
}
