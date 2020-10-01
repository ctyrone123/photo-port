import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

describe('Contact component', () => {
    // First Test
    it('renders', () => {
      render(<Contact />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
        
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
      })

      const { getByTestId } = render(<Contact />)
    expect(getByTestId('h1tag2')).toHaveTextContent('Contact me')
    expect(getByTestId('h1tag3')).toHaveTextContent('Submit')
    
    
  })