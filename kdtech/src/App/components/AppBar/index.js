import React from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import { ColorsApp } from "../../assets/colors";
import { FontsApp } from "../../assets/font";
import { useSelector } from 'react-redux'

const TitleAppBar = styled('div')``;
const AppBarWrapper = ({
  handleDrawerToggle,
  drawerWidth,
  title,
}) => {
  const StatusPageReducer = useSelector((state) => state.StatusPageReducer)
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        boxShadow: "none",
        backgroundColor: ColorsApp.white,
        minHeight: "85px !important",
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar>
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <TitleAppBar sx={{
            fontFamily: FontsApp.Manrope,
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '33px',
            color: ColorsApp.ungu,
          }}>{`Hallo ${StatusPageReducer.role}, ${StatusPageReducer.name}`}</TitleAppBar>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarWrapper;
