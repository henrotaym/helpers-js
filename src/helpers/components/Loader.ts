import { trying } from "../functions";

/** Loader class. */
class Loader {
  /** Loading status. */
  private loading!: boolean;

  /** Initializing loading status. */
  constructor(status: boolean) {
    this.setLoadingStatus(status);
  }

  /** Starting to load. */
  public load(): Loader {
    return this.setLoadingStatus(true);
  }

  /** Stopping to load. */
  public stop(): Loader {
    return this.setLoadingStatus(false);
  }

  /** Starting to load till given callback is resolved. */
  public async loadTill<R>(
    callback: () => Promise<R>
  ): Promise<Awaited<R> | null> {
    this.load();
    const [, response] = await trying<R>(callback);
    this.stop();
    return response;
  }

  /** Telling if loader is loading. */
  public get isLoading(): boolean {
    return this.loading;
  }

  /** Setting loading status to given value. */
  public setLoadingStatus(status: boolean): Loader {
    this.loading = status;
    return this;
  }
}

export default Loader;
