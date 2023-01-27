import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { DrawerCustom } from '../../components/DrawerCustom';
import { CardProducts } from '../../components/CardProducts'
import { useAppDispatch, useAppSelector } from '../../helpers';
import { SkeletonProducts } from '../../components/SkeletonProducts';
import { Navbar } from '../../components/Navbar';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { getProducts } from '../../services';

export function ProductsPage() {
  const dispatch = useAppDispatch();
  const { data: { products }, loading } = useAppSelector((state) => state.product);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }

  function handleAddToCart(product: Product ) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product.id
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

  function handleRemoveToCart(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product.id
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

  function handleDeleteProductToCart(product: Product) {
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItem => cartItem.product.id === product.id
      );
      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if (item.quantity >= 1) {
        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      return newCartItems;
    });
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
        {loading ? (
          <SkeletonProducts />
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <CardProducts product={product} onAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
