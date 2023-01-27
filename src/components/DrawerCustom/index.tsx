import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { Drawer, DrawerTitle, Avatar, Checkout, CheckoutButton } from './styles';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { CartProduct } from '../CartProduct';
import { formatCurrency } from '../../helpers';

interface DrawerCustomProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function DrawerCustom({ open, onClose, cartItems, onAdd, onRemove, onDelete }: DrawerCustomProps) {
  const total = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Grid container spacing={4}>
        <DrawerTitle item xs={12}>
          <Typography variant="h2">Carrinho<br/> de compras</Typography>
          <Avatar onClick={onClose}>
            <CloseIcon />
          </Avatar>
        </DrawerTitle>
        <Grid item xs={12}>
          {cartItems?.length > 0 && (
            <CartProduct cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}  />
          )}
        </Grid>
        <Checkout>
          <Box display="flex" alignItems="center" justifyContent="space-between" padding="2rem">
            <Typography variant="h2">Total:</Typography>
            <Typography variant="h2">{formatCurrency(total)}</Typography>
          </Box>
          <CheckoutButton>
            <Typography variant="h2">Finalizar Compra</Typography>
          </CheckoutButton>
        </Checkout>
      </Grid>
    </Drawer>
  );
}