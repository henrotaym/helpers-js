/** Trying to execute given callback. */
async function trying<R>(
  callback: () => R
): Promise<[null | Error, null | Awaited<R>]> {
  try {
    const response = await callback();
    return [null, response];
  } catch (error) {
    return [error as Error, null];
  }
}

export default trying;
