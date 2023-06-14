import { useContext } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { UserContext } from '../App' 


function ButtonAppBar({ userEmail, onLogout }) {
  const userContext = useContext(UserContext)
  console.log(userContext.email)
  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wellcome   {userContext.email}
            </Typography>
            <Button color="inherit" onClick={onLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>

  );
}
export default ButtonAppBar;
