import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Example from './Example';

afterEach(() => {
  cleanup();
});

describe('example tests', () => {
  it('get heading text success', () => {
    render(<Example />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement.innerHTML).toBe('Hello world!');
    expect(headingElement.innerHTML).toBeTruthy();
  });

  it('get heading text failed', () => {
    render(<Example />);

    const headingElement = screen.getByRole('heading');
    expect(headingElement.innerHTML).toBe('Hello kitty!');
    expect(headingElement.innerHTML).toBeTruthy();
  });
});
