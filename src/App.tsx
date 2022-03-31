import { useState } from "react";
import { useQuery } from "react-query";
//Components
import { Drawer } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@mui/material";
//Styles
import {Wrapper} from './App.styles';
import { type } from "@testing-library/user-event/dist/type";

//type
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}

const getProducts = async (): Promise<CartItemType[]> => await(await fetch("https://fakestoreapi.com/products")).json();




const App = () => {
  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts);

  if(isLoading) return <LinearProgress />;
  console.log(isLoading);
  console.log(data);
  

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = () => null;

  //if(isLoading) return <LinearProgress />;

  if(error) return <div>Something went wrong...</div>

  return (
    <div className="App">
      start
    </div>
  );


}

export default App;
