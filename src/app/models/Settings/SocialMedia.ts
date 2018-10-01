import { NamedImage } from "../../models/NamedImage";
import { Setting } from "./Setting";

export class SocialMedia extends Setting {

  constructor(imagePath: string, name: string) {
    super(imagePath, name);
  }

}
