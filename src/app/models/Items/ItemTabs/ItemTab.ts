import { NamedImage } from "../../NamedImage";

/**
 * Tab Abstraction for the action-bar Item menu
 */
export class ItemTab extends NamedImage {
  // The asset image pathing for the default bag
  public static defaultPath = "../../../../../../assets/img/bags/";
  // The asset image default extension
  public static defaultExt = ".png";

  /**
   * Generate the basic ItemTab with the required imputs
   * @param imagePath Image resource location
   * @param name The name of the tab, used for hover tooltip
   */
  constructor(imagePath: string, tabName: string) {
    super(ItemTab.defaultPath + imagePath + ItemTab.defaultExt, tabName);
  }
}
