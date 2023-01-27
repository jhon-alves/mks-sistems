import { render, waitFor, fireEvent } from '@testing-library/react';
import { Navbar } from './';

describe('Tests for Navbar Component', () => {
  it('should look for the cart button and open the Drawer component', async () => {
    const { getByTestId } = render(<Navbar />);
    const searchCartBtn = await waitFor(() => getByTestId('cart-btn'));

    fireEvent.click(searchCartBtn);


  })
  // it('should count the products that have been added to the cart', async () => {
    
  // })
});

