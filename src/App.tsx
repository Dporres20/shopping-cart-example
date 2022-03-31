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

const getProducts = async () => await(await fetch("https://fakestoreapi.com/products")).json();


const App = () => {
  return (
    <div className="App">
      start
    </div>
  );
}

export default App;
