import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();

  it('renders', () => {
    render(<Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
    />);
  })
  
afterEach(cleanup);
describe('Nav component', () => {
    // baseline test
   
    // snapshot test
    })
    describe('Nav component', () => {
        // baseline test
        it('renders', () => {
          render(<Nav />);
        });
      
        //snapshot test
      })
      describe('Nav component', () => {
        // baseline test
        it('renders', () => {
          render(<Nav />);
        });
      
        // snapshot test
        it('matches snapshot', () => {
          const { asFragment } = render(<Nav />);
          // assert value comparison
        });
      })
      it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
      
        expect(asFragment()).toMatchSnapshot();
      });