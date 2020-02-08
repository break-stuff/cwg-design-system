import { Component, h, Prop } from '@stencil/core';


@Component({
    tag: 'cwg-button'
})
export class CwgButtons {
    @Prop() variant: any = 'primary';

    classList() {
        return
    }
    render() {
        return (
            <button class={`button ${this.variant}`}>
                <slot />
            </button>
        );
    }
}