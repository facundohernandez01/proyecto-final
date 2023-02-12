import { useContext } from "react";
import { CartContext } from '../Context/index';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import ConfirmationDialogRaw from '../Checkout/checkout_modal'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
const Cart = ({ handleClose, open }) => {
  const [opened, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const chekoutClose = () => {
    setOpen(false);
  };
  let totales = 0
  const { vaciarCarrito, cart, eliminaItem } = useContext(CartContext) 

    return (
<div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Carrito
            </Typography>
            <Button variant="outlined" autoFocus color="inherit" onClick={() =>vaciarCarrito()} startIcon={<DeleteIcon />}>
            Vaciar
            </Button>
          </Toolbar>
        </AppBar>
        <List>
        {cart.map((item) => (
        <ListItem key={item.id}
        secondaryAction={ 
            <IconButton aria-label="delete" size="large" onClick={() => eliminaItem(item.id)}>
            <DeleteIcon fontSize="inherit" />
            </IconButton>
        }>
            <img className='imgCart' src={item.image_url}>
            </img>
          <TextField xs={12} sx={{
            width: 70,
            margin:2
          }}
                    id="outlined-number"
                    label="cant"
                    value={item.cantidad}
          ></TextField>
            <TextField xs={12} sx={{width: 90, margin:1 }}label="$" value={item.price}/>
            <ListItemText xs={12} sx={{alignContent: 'left'}} 
            item={item} key={item.id} primary={item.title} secondary={item.categoria}>
            </ListItemText>           
        </ListItem>
        ))}
        <ListItem>       
        {cart.map(item => {totales += parseInt(item.price)}).join('')};
        {cart.length === 0 ? (<p></p>) : (
        <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
        Total: $ {totales}
        </Typography>)}
        </ListItem>
        </List>
        <ListItem>
        {cart.length === 0 ? (<ListItemText>No hay artículos en el carrito</ListItemText>) : (
        <>
        <Button variant="outlined" onClick={handleClickOpen}>Finalizar compra</Button>
        <Button variant="outlined" onClick={handleClose}>Seguir comprando </Button>
        </>
        )}
        </ListItem>


      </Dialog>
      <ConfirmationDialogRaw 
        handleClickOpen={handleClickOpen} 
        open={opened}
        chekoutClose={chekoutClose}
        setOpen={setOpen}
        />
    </div>
    );

};



export default Cart;