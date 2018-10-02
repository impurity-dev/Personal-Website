import { Spell } from "../models/Spells/Spell";
import { SpellType } from "../enums/SpellType";

/**
 * Spell factory will create any spell based off spelltype enum
 */
export class SpellFactory {

  /**
   * Create any potion based off type
   * @param type Potion to be created
   */
  public static Create(type: SpellType): Spell {

    return null;
  }
}
