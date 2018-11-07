import { NamedImage } from "../../models/NamedImage";
import { ImageRoutes } from "src/app/constants/ImageRoutes";

/**
 * Setting Representation
 */
export class Setting extends NamedImage {
  /**
   * Constructor to create a basic potion that handles all pathing and extensions
   *
   * @param imageName Asset name, without path or extension
   * @param settingName Setting name
   */
  constructor(imagePath: string, settingName: string) {
    super(ImageRoutes.SETTINGS + imagePath, settingName);
  }
}
