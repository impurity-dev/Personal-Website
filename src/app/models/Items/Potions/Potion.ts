import {Item} from "../Item";
import { PotionType } from "../../../enums/Potions/PotionType";
import { PotionColor } from "../../../enums/Potions/PotionColor";
import { ImageRoutes } from "src/app/constants/ImageRoutes";

/**
 * A potion object
 */
export class Potion extends Item {
  // The type of potion this object is
  public type: PotionType;
  // THe color of the potion this object is
  public color: PotionColor;

  /**
   * Constructor to create a basic potion that handles all pathing and extensions
   *
   * @param imageName Asset name, without path or extension
   * @param potionName Potion name
   */
  constructor(imageName: string, potionName: string) {
    super(ImageRoutes.POTIONS + imageName, potionName);
  }

}
