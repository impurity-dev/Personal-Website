import { NamedImage } from "../NamedImage";

// TODO: Implement drag drop capabilities
export class Item extends NamedImage {

  constructor(imagePath: string, name: string) {
    super(imagePath, name);
  }

}
