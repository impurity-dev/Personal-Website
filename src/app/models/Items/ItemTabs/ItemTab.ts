import { NamedImage } from "../../NamedImage";
import { ImageRoutes } from "src/app/constants/ImageRoutes";

/**
 * Tab Abstraction for the action-bar Item menu
 */
export class ItemTab extends NamedImage {

  /**
   * Generate the basic ItemTab with the required imputs
   * @param imagePath Image resource location
   * @param name The name of the tab, used for hover tooltip
   */
  constructor(imagePath: string, tabName: string) {
    super(ImageRoutes.BAGS + imagePath, tabName);
  }
}
