import React from 'react';
import Button from '../components/Button';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

const defaultProps = { 
  onClick: jest.fn(),
  text: "Submit" ,
};

test('button renders with correct text', () => {
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  expect(queryByText("Submit")).toBeTruthy(); 

  // Change props
  rerender(<Button {...defaultProps} text="Go" />);
  expect(queryByText("Go")).toBeTruthy(); 
});

test('calls correct function on click', () => {
  const onClick = jest.fn();// to mock functions ......
  const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
  fireEvent.click(getByText(defaultProps.text));
  expect(onClick).toHaveBeenCalled();//test if a button has been clicked one time 
});