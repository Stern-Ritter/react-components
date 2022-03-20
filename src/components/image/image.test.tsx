import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Image from './image';

describe('Component Image', () => {
  beforeEach(() => {
    render(
      <Image width={100} height={100} src={'src link'} alt={'alt text'} />
    );
  });

  it('render element', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('render element with correct width', () => {
    expect(screen.getByRole('img')).toHaveStyle('width: 100px');
  });

  it('render element with correct height', () => {
    expect(screen.getByRole('img')).toHaveStyle('height: 100px');
  });

  it('render element with correct src', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'src link');
  });

  it('render element with correct alt', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'alt text');
  });
});
