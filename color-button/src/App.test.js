import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the button starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () =>{
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  userEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  userEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button has gray background and reverts to red', () => {
  render(<App/>);
   const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
   const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  
   // disable button
   userEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: gray');
  
   // re-enable button
   userEvent.click(checkbox);
   expect(colorButton).toHaveStyle('background-color: red');
});

test('Clicked disabled button has gray background and reverts to blue', () => {
  render(<App/>);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  // change button to blue
  userEvent.click(colorButton);

  // disable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');
  
  // re-enable button
  userEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: blue');
});
