import { useState } from 'react';
import { toast } from 'react-toastify';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { DrawerCustom } from '../../components/DrawerCustom';
import { CardProducts } from '../../components/CardProducts'
import { SkeletonProducts } from '../../components/SkeletonProducts';
import { Navbar } from '../../components/Navbar';
import { CartItem } from '../../types/CartItem';
import { Character } from '../../services/types';
import { useGetCharacters } from './useGetCharacters';

export function ProductsPage() {
  const { characters, loadingCharacters } = useGetCharacters();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleAddToCart(product: Character) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product._id
      );

      if (itemIndex < 0) {
        return prevState.concat({
          quantity: 1,
          product,
        });
      }

      const newCartItems = [...prevState];
      const item = newCartItems[itemIndex];
      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity + 1,
      };

      return newCartItems;
    });
  }

  function handleRemoveToCart(product: Character) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity === 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;
    });
  }

  function handleDeleteProductToCart(product: Character) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product._id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity >= 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      return newCartItems;
    });

    toast.success(`${product.name} removido do carrinho!`);
  }

  return (
    <>
      <DrawerCustom
        open={openDrawer}
        onClose={toggleDrawer}
        cartItems={cartItems}
        onAdd={handleAddToCart}
        onRemove={handleRemoveToCart}
        onDelete={handleDeleteProductToCart}
      />
      <Navbar openDrawer={toggleDrawer} cartQuantity={cartQuantity} />
      <Container maxWidth="lg" sx={{ marginTop: '4rem' }}>
        {loadingCharacters ? (
          <SkeletonProducts />
        ) : (
          <Grid container spacing={3}>
            {characters && characters.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item._id}>
                <CardProducts character={item} onAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
