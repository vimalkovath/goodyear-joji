import { NavLink } from "react-router-dom";
import { routes } from "../utilities/constantUrls";

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import BarChart from "../components/BarChart";
import ProgressCircle from "../components/ProgressCircle";
import GeographyChart from "../components/GeographyChart";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div style={{ padding: "18px 0px 0px 18px" }}>



      <div className="container">
        
      <h4>
      Hi JOJI Welcome
      </h4>
<div>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      
</div>


      {routes.map((route, index) => {
                return (
                  <NavLink
                  to={route.path}
                  key={index}
                >
                  <div className="tile job">
          <div className="header">
            <div className="count">{route.icon}</div>
            {/* <div className="title">Jobs</div> */}
          </div>
          <div className="body">
            <div className="title"> {route.name}</div>
          </div>
        </div>
        </NavLink>
                );
              })}

 
      </div>
    </div>
  );
};

export default Dashboard;
