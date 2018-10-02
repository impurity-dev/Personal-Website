/**
 * Spell Card abstraction that holds all info for the flippable spell cards
 * All spells are programming languages that I have utilized in the past
 */
export class Spell {
  /**
   * Default spell card with all required information
   * @param imagePath Image resource for spell
   * @param header Title of spell
   * @param subHeader Sub-Title of spell
   * @param description Description of spell
   */
  constructor(
    public imagePath: string,
    public header: string,
    public subHeader: string,
    public description: string) { }
}
