import { ImageRoutes } from "../constants/ImageRoutes";

/**
 * An image & name pairing
 * All images must be located in the assets/img folder
 */
export class NamedImage {
  // The asset image default extension
  public static defaultExt = ".png";

  // The image path to the source
  protected imagePath: string;
  // The name of the image
  protected name: string;

  /**
   * Create the image & name pairing
   *
   * @param imagePath image asset path
   * @param name name of image
   */
  constructor(imagePath: string, name: string) {
    this.imagePath = ImageRoutes.DEFAULT + imagePath + NamedImage.defaultExt;
    this.name = name;
  }

  /**
   * Get the image path
   */
  public getImagePath(): string {
    return this.imagePath;
  }

  /**
   * Get the name
   */
  public getName(): string {
    return this.name;
  }
}
