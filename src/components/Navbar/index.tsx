import Container from '@mui/material/Container';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { AppBar, Toolbar, Logo, ButtonCart, CartValue } from './styles';

interface NavbarProps {
  openDrawer: () => void;
  cartQuantity: number;
}

export function Navbar({ openDrawer, cartQuantity }: NavbarProps) {
  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar>
          <Logo>Zaply</Logo>
          <ButtonCart
            data-testid="cart-btn"
            size="large"
            variant="contained"
            startIcon={<ShoppingCartOutlinedIcon />}
            onClick={openDrawer}
          >
            <CartValue>{cartQuantity}</CartValue>
          </ButtonCart>
        </Toolbar>
      </Container>
    </AppBar>
  );
}