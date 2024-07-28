import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import React from 'react'

const PaginationComponent = ({setPage , pageCount = 10}) => {
    const handlePageChange = (page) =>{
        setPage(page);
        window.scroll(0,0);
    }
  return (
     <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh', // Full height of the viewport
        
      }}
    >        <Stack spacing={2}>
    <Pagination
     count = {pageCount}
     onChange ={(e) => handlePageChange(e.target.textContent)}
     sx={{
        '& .MuiPaginationItem-root': {
          color: 'white', // Set the color for all pagination items
        },
        '& .Mui-selected': {
          backgroundColor: 'blue', // Set the background color for the selected item
          color: 'white', // Ensure the selected item text color is readable
        },
        '& .MuiPaginationItem-ellipsis': {
          color: 'white', // Set the color for ellipsis items if any
        },
      }}
    />
    </Stack>
    </div>
  )
}

export default PaginationComponent