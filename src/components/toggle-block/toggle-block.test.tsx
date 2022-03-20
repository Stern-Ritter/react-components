import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ToggleBlock from './toggle-block';

describe('Component ToggleBlock', () => {
  beforeEach(() => {
    render(<ToggleBlock title="Title">Content</ToggleBlock>);
  });

  it('render element', () => {
    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });

  it('render element with toggle handler', () => {
    expect(screen.queryByText('Content')).toBeNull();
    const toggle = screen.getByRole('heading', { level: 4 });
    userEvent.click(toggle);
    expect(screen.getByText('Content')).toBeInTheDocument();
    userEvent.click(toggle);
    expect(screen.queryByText('Content')).toBeNull();
  });
});
