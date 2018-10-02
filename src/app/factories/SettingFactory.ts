import { SettingType } from "../enums/SettingType";
import { Setting } from "../models/Settings/Setting";

/**
 * Settings factory will create any setting based off settingtype enum
 */
export class SettingFactory {

  /**
   * Create any setting based off type
   * @param type Setting to be created
   */
  public static Create(type: SettingType): Setting {

    return null;
  }
}
