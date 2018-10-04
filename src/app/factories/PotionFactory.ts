import { PotionType } from "../enums/Potions/PotionType";
import { Potion } from "../models/Items/Potions/Potion";
import { TubePotion } from "../models/Items/Potions/Types/TubePotion";
import { TrianglePotion } from "../models/Items/Potions/Types/TrianglePotion";
import { RectanglePotion } from "../models/Items/Potions/Types/RectanglePotion";
import { RoundPotion } from "../models/Items/Potions/Types/RoundPotion";
import { SquarePotion } from "../models/Items/Potions/Types/SquarePotion";
import { PotionColor } from "../enums/Potions/PotionColor";

/**
 * Potion factory will create any potion based off potiontype enum
 */
export class PotionFactory {

  /**
   * Create any potion based off type
   * @param type Potion to be created
   */
  public static Create(type: PotionType, color: PotionColor): Potion {
    switch (type) {
      case PotionType.Rectangle: return new RectanglePotion(color);
      case PotionType.Round: return new RoundPotion(color);
      case PotionType.Square: return new SquarePotion(color);
      case PotionType.Triangle: return new TrianglePotion(color);
      case PotionType.Tube: return new TubePotion(color);
    }

    return null;
  }
}
