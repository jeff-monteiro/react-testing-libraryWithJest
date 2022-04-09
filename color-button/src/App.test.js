import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  // click the button
  fireEvent.click(colorButton);
  
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ background: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton.textContent).toBe('Change to red');
  
  
});

test('initial conditions', () => {
  render(<App/>);

  // check that the button starts out enabled
  const colorButton = screen.getAllByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the button starts out unchecked
  const checkbox = screen.getByRole('checkbox');
})
