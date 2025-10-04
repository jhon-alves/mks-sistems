import { toast } from 'react-toastify';
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
import { Character } from '../../services/types';

interface CardProductsProps {
  character: Character;
  onAddToCart: (product: Character) => void;
}

export function CardProducts({ character, onAddToCart }: CardProductsProps) {
  
  if (!character) {
    return null;
  }

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardActionArea>
        <Box height="250px">
          <CardMedia component="img" image={character.imageUrl} height={250} style={{ objectFit: 'cover' }} />
        </Box>
        <CardContent>
          <Box display="flex" alignItems="center" justifyContent="space-between" height="50px">
            <ProductName>
              {character.name}
            </ProductName>
            <Chip label={formatCurrency(1000)} />
          </Box>
          <ProductDescription variant="body2" color="text.secondary">
            {/* {character.description} */}
          </ProductDescription>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ p: 0 }}>
        <ButtonBuy
          variant="text"
          startIcon={<LocalMallIcon />}
          onClick={() => { 
            onAddToCart(character); 
            toast.success(`${character.name} adicionado ao carrinho!`); 
          }}
        >
          COMPRAR
        </ButtonBuy>
      </CardActions>
    </Card>
  );
}