import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextBlock from './text-block';

describe('Component TextBlock', () => {
  beforeEach(() => {
    render(
      <TextBlock fontFamily="Roboto" fontSize="24" color="#4169E1">
        Text
      </TextBlock>
    );
  });

  it('render element', () => {
    expect(screen.getByTestId('paragraph')).toBeInTheDocument();
  });

  it('render element with correct text', () => {
    expect(screen.getByTestId('paragraph')).toHaveTextContent('Text');
  });

  it('render element with correct font-family', () => {
    expect(screen.getByTestId('paragraph')).toHaveStyle('font-family: Roboto');
  });

  it('render element with correct font-size', () => {
    expect(screen.getByTestId('paragraph')).toHaveStyle('font-size: 24px');
  });

  it('render element with correct color', () => {
    expect(screen.getByTestId('paragraph')).toHaveStyle('color: #4169E1');
  });

  it('render element with correct class', () => {
    expect(screen.getByTestId('paragraph')).toHaveClass('text');
  });
});
