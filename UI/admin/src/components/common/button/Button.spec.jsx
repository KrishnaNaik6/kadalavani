import { render } from 'test-utils';
import { describe, it } from 'vitest';
import Button from './Button';

const renderButton = (props) => render(<Button {...props}>Click me</Button>);

describe('Button', () => {
  it('Renders the Button.vue component', () => {
    const { getByText } = renderButton();
    // Get by text will throw if there is no text, so there is
    // no need to add expect() check
    getByText('Click me');
  });
});
