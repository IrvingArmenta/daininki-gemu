/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare module '*.svg' {
  import React from 'react';

  const content: string;
  export const ReactComponent: React.ElementType<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.mp3' {
  const content: string;
  export default content;
}
