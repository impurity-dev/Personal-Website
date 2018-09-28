/**
 * Tab Abstraction for the action-bar Item menu
 */
export class ItemTab {

  /**
   * Generate the basic ItemTab with the required imputs
   * @param imagePath Image resource location
   * @param name The name of the tab, used for hover tooltip
   */
  constructor(public imagePath: string, public name: string) { }
}
