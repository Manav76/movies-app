import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

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
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
