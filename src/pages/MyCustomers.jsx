import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockDataContacts } from "../data/mockData";
import Header from "../components/Header";
import Swal from 'sweetalert2';
// import 'sweetalert2/src/sweetalert2.scss'

import { useNavigate } from "react-router-dom";

export default function MyCustomers() {
  // useGridApiEventHandler(apiRef, 'cellMouseOver', handleEvent);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  const handleMouseOver = (name) => {
    // alert(`Movie ${name} clicked`)
    const a=`<div><h1>Hi</h1><h5>${name}</h5></div>`

    Swal.fire({
      title: 'Do you want to Open?',
      html:a,
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Open',
      // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        navigate("/MyCustomers/Account");
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })

  };
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { name } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }} 
            onMouseOver={()=>handleMouseOver(name)}>
            {name}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];


  // const handleEvent = (
  //   params, // GridRowParams
  //   event, // MuiEvent<React.MouseEvent<HTMLElement>>
  //   details, // GridCallbackDetails
  // ) => {
  //   alert(`Movie "${params.row.name}" clicked`)
  // };
  const handleCellClick = (
    params, // GridCellParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log(params)
    alert(`Movie "${params.value}" clicked`)
  };
  const handleCellMouseOver = (
    params, // GridCellParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log(params)
    alert(`Movie "${params.value}" clicked`)
  };

  return (
    <Box m="20px">
      <Header
        title="Accounts"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
        // onRowClick={handleEvent}
        onCellClick={handleCellClick}
        onCellMouseOver={handleCellMouseOver}
        // onCellClick={(params: GridCellParams, event: MuiEvent<React.MouseEvent>) => {
        //   event.defaultMuiPrevented = true;
        // }}
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </Box>
    </Box>
  )
}




