import { NamedImage } from "../../models/NamedImage";

export class Setting extends NamedImage {

  constructor(imagePath: string, name: string) {
    super(imagePath, name);
  }
}
