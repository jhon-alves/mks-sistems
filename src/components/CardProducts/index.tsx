import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import {
  ProductName,
  Chip,
  ProductDescription,
  CardActions,
  ButtonBuy
} from './styles';
import { formatCurrency } from '../../helpers';
import { Product } from '../../types/Product';

interface CardProductsProps {
  product: Product | null;
  onAddToCart: (product: Product) => void;
}

export function CardProducts({ product, onAddToCart }: CardProductsProps) {
  
  if (!product) {
    return null;
  }

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardActionArea>
        <Box display="flex" alignItems="center" justifyContent="center" height="300px">
          <CardMedia component="img" image={product.photo} />
        </Box>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between" height="50px">
            <ProductName>
              {product.name}
            </ProductName>
            <Chip label={formatCurrency(product.price)} />
          </Box>
          <ProductDescription variant="body2" color="text.secondary">
            {product.description}
          </ProductDescription>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        <ButtonBuy
          variant="text"
          startIcon={<LocalMallIcon />}
          onClick={() => onAddToCart(product)}
        >
          COMPRAR
        </ButtonBuy>
      </CardActions>
    </Card>
  );
}