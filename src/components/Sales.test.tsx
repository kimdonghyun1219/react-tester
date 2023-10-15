import Sales from '@components/Sales';
import { render, screen } from '@testing-library/react';

/**
 * toMatchSnapshot
 */

it('match snapshot', () => {
  const utils = render(<Sales title="Test1" count={1} />);
  expect(utils.container).toMatchSnapshot();
});

/**
 * getByText
 */
it('shows the props correctly', () => {
  const utils = render(<Sales title="Test1" count={1} />);
  utils.getByText('Test1');
  // utils.getByText(1);
})
