// This function type will ensure fn is constrained so that only arguments with types that extend () => any are usable. () => any represents any function that takes no arguments (and returns a value of type any).

// ReturnType is a helpful utility type that we can use to grab the return type of this generic function type.

//Note:: We need to fix the index.ts "stringOutput result" to result.toString() 


function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  type FunctionWithoutParams = () => any;
  type Config = { tries: number; interval: number };
  
  export async function retryFn<T extends FunctionWithoutParams>(
    fn: T,
    { tries, interval }: Config
  ): Promise<ReturnType<T>> {
    try {
      return await fn();
    } catch (e) {
      const newTries = tries - 1;
  
      if (newTries === 0) {
        throw e;
      }
  
      await wait(interval);
  
      return retryFn(fn, { tries: newTries, interval });
    }
  }