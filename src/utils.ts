/* eslint-disable @typescript-eslint/no-explicit-any */
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export const isMobile = () =>
  typeof window !== undefined
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    : null;

export interface ThrottleOptions {
  delay: number;
  leading?: boolean;
  trailing?: boolean;
}

export const isThrottleOptions = (
  arg: ThrottleOptions | number
): arg is ThrottleOptions => {
  return (arg as ThrottleOptions).delay !== undefined;
};

export function throttle<Cb>(
  options: ThrottleOptions | number,
  func: (Cb: Cb) => void
) {
  let delay: number;
  const leading = (options as ThrottleOptions).leading || false;
  const trailing = (options as ThrottleOptions).trailing || false;

  let timeoutID: number | undefined | NodeJS.Timeout;
  let cancelled: boolean;
  let lastExec = leading ? 0 : Date.now();

  if (isThrottleOptions(options)) {
    delay = options.delay;
  } else {
    delay = options;
  }

  const clearExistingTimeout = () => {
    if (timeoutID && typeof timeoutID === 'number') {
      clearTimeout(timeoutID);
      timeoutID = undefined;
    }
  };

  const cancel = () => {
    clearExistingTimeout();
    cancelled = true;
  };

  const trailingExec = (exec: () => void) => {
    if (trailing) {
      clearExistingTimeout();
      if (!timeoutID) {
        timeoutID = setTimeout(exec, delay);
      }
    }
  };

  const wrapper = (...args: any) => {
    if (cancelled) {
      return;
    }

    const exec = () => {
      lastExec = Date.now();
      func.apply(self, args);
    };

    trailingExec(exec);

    const runTime = Date.now() - lastExec;
    if (runTime > delay) {
      exec();
    }
  };

  wrapper.cancel = cancel;
  return wrapper;
}

export default throttle;
