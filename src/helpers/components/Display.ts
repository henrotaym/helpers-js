/** Class handling visibility. */
class Display {
  /** Visibility attribute. */
  private visible!: boolean;

  /** Initializing visibility. */
  constructor(visible: boolean) {
    this.setVisibility(visible);
  }

  /** Telling if element is visible. */
  public get isVisible(): boolean {
    return this.visible;
  }

  /** Showing element. */
  public show(): Display {
    return this.setVisibility(true);
  }

  /** Hiding element. */
  public hide(): Display {
    return this.setVisibility(false);
  }

  /** Toggling element visibility. */
  public toggle(): Display {
    return this.setVisibility(!this.visible);
  }

  /** Setting visibility to given status. */
  public setVisibility(visible: boolean) {
    this.visible = visible;

    return this;
  }
}

export default Display;
