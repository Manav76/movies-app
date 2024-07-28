import React , {useEffect} from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useNavigate } from "react-router-dom";
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (value) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/movies");
        break;
      case 2:
        navigate("/search");
        break;
      default:
        navigate("/");
        break;
    }
  }, [value, navigate]);
  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0, backgroundColor: "#2d313a", zIndex: 100 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          '& .MuiBottomNavigationAction-root': {
            color: 'white !important', // Default color for  all icons
            '&.Mui-selected': {
              color: '#ff5722 !important', // Color for the selected icon
            },
          },
          '& .MuiBottomNavigationAction-label': {
            color: 'inherit !important', // Inherit color from the icon
          },
        }}
      >
        <BottomNavigationAction
          label="Trending"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Movies"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Search"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
