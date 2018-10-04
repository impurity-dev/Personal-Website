import { PotionFactory } from "./PotionFactory";
import { Potion } from "../models/Items/Potions/Potion";
import { BagType } from "../enums/BagType";
import { ItemType } from "../enums/ItemType";
import { Item } from "../models/Items/Item";
import { SettingFactory } from "./SettingFactory";
import { ArmorType } from "../enums/ArmorType";
import { Armor } from "../models/Items/Armor";
import { WeaponType } from "../enums/WeaponType";
import { Weapon } from "../models/Items/Weapon";
import { WeaponFactory } from "./WeaponFactory";
import { SettingType } from "../enums/SettingType";
import { Setting } from "../models/Settings/Setting";
import { SpellFactory } from "./SpellFactory";
import { SpellType } from "../enums/SpellType";
import { Spell } from "../models/Spells/Spell";
import { PotionType } from "../enums/Potions/PotionType";
import { ArmorFactory } from "./ArmorFactory";
import { PotionColor } from "../enums/Potions/PotionColor";

/**
 * Item factory will create any potion based off Item enums
 */
export class ItemFactory {

  /**
   * Create any potion based off type
   * @param type Potion to be created
   */
  public static CreatePotion(type: PotionType, color: PotionColor): Potion {
    return PotionFactory.Create(type, color);
  }

  /**
   * Create any item based off type
   * @param type Item to be created
   */
  public static CreateArmor(type: ArmorType): Armor {
    return ArmorFactory.Create(type);
  }

  /**
   * Create any item based off type
   * @param type Item to be created
   */
  public static CreateWeapon(type: WeaponType): Weapon {
    return WeaponFactory.Create(type);
  }

  /**
   * Create any item based off type
   * @param type Item to be created
   */
  public static CreateSetting(type: SettingType): Setting {
    return SettingFactory.Create(type);
  }

  /**
   * Create any item based off type
   * @param type Item to be created
   */
  public static CreateSpell(type: SpellType): Spell {
    return SpellFactory.Create(type);
  }
}
