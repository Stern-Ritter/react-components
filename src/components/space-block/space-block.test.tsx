import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpaceBlock from './space-block';

describe('Component SpaceBlock', () => {
  beforeEach(() => {
    render(
      <SpaceBlock
        blockHeight={32}
        separatorHeight={1}
        separatorColor="#8B0000"
      />
    );
  });

  it('render element', () => {
    expect(screen.getByTestId('space')).toBeInTheDocument();
  });

  it('render element with correct height', () => {
    expect(screen.getByTestId('space')).toHaveStyle('height: 16px');
  });

  it('render element with correct margin', () => {
    expect(screen.getByTestId('space')).toHaveStyle('margin-bottom: 16px');
  });

  it('render element with correct separator line', () => {
    expect(screen.getByTestId('space')).toHaveStyle(
      'border-bottom: 1px solid #8B0000'
    );
  });
});
