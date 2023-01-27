import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { GridItem, Card, QuantityBox, Avatar } from './styles';
import { formatCurrency } from '../../helpers';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';

interface CartProductProps {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onRemove: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export function CartProduct({ cartItems, onAdd, onRemove, onDelete }: CartProductProps) {
  return (
    <Grid container spacing={3}>
      {cartItems.map((cartItem) => (
        <GridItem item xs={12} key={cartItem.product.id}>     
          <Card>         
            <img src={cartItem.product.photo} alt={cartItem.product.name} />

            <Box width="150px">
              <Typography variant="body2">{cartItem.product.name}</Typography>
            </Box>

            <Box>
              <Typography variant="caption">Qtd:</Typography>
              <QuantityBox>
                <RemoveIcon
                  fontSize="small"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onRemove(cartItem.product)}
                />
                <Typography variant="body2">{cartItem.quantity}</Typography>
                <AddIcon
                  fontSize="small"
                  sx={{ cursor: 'pointer' }}
                  onClick={() => onAdd(cartItem.product)}
                />
              </QuantityBox>
            </Box>

            <Typography variant="subtitle1">
              {formatCurrency(cartItem.product.price * cartItem.quantity)}
            </Typography>
          </Card>
          <Avatar onClick={() => onDelete(cartItem.product)}>
              <CloseIcon sx={{ fontSize: 16 }} />
            </Avatar>
        </GridItem>
      ))}
    </Grid>
  );
}