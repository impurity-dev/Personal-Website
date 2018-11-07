import { Setting } from "./Setting";
import { ImageRoutes } from "src/app/constants/ImageRoutes";

export class SocialMedia extends Setting {
  /**
   * Constructor to create a basic potion that handles all pathing and extensions
   *
   * @param imageName Asset name, without path or extension
   * @param settingName Setting name
   */
  constructor(imagePath: string, name: string) {
    super(ImageRoutes.SOCIAL_MEDIA + ImageRoutes.PASSIVE + imagePath, name);
  }

}
