/**
 * An image & name pairing
 */
export class NamedImage {
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
    this.imagePath = imagePath;
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
  public getNamePath(): string {
    return this.name;
  }
}
