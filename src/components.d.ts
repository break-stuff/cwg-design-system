/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CwgButton {
    'variant': any;
  }
}

declare global {


  interface HTMLCwgButtonElement extends Components.CwgButton, HTMLStencilElement {}
  var HTMLCwgButtonElement: {
    prototype: HTMLCwgButtonElement;
    new (): HTMLCwgButtonElement;
  };
  interface HTMLElementTagNameMap {
    'cwg-button': HTMLCwgButtonElement;
  }
}

declare namespace LocalJSX {
  interface CwgButton {
    'variant'?: any;
  }

  interface IntrinsicElements {
    'cwg-button': CwgButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'cwg-button': LocalJSX.CwgButton & JSXBase.HTMLAttributes<HTMLCwgButtonElement>;
    }
  }
}


