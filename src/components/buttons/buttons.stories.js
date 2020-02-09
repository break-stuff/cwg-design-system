import { text, select, boolean } from '@storybook/addon-knobs';

export default { title: 'Button' };

const types = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', 'link', 'none'];

export const playground = () => {
    const type = select('type', types, 'primary');
    const src = text('src', '');
    const hollow = boolean('hollow', false);
    const clear = boolean('clear', false);

    return (`<button class="button ${type} ${clear ? 'clear' : ''}">Test Button</button>`)
}