import {Item} from "../Item";
import { PotionType } from "../../../enums/PotionType";

/**
 * A potion object
 */
export class Potion extends Item {
  // The asset image pathing for the default potion
  public static defaultPath = "../../../../assets/img/potions/";
  // The asset image default extension
  public static defaultExt = ".png";
  // The type of potion this object is
  public type: PotionType;

  /**
   * Constructor to create a basic potion that handles all pathing and extensions
   *
   * @param imageName Asset name, without path or extension
   * @param potionName Potion name
   */
  constructor(imageName: string, potionName: string) {
    super(Potion.defaultPath + imageName + Potion.defaultExt, potionName);
  }

}
