import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Paper, Box, CardActionArea } from "@mui/material";
import { drawerMenu } from "../../constants/menu";

const Cards = (props) => {
  const navigate = useNavigate();
  const { children } = props.items[1];
  console.log(children);
  if (children) {
    return children.map((child, index) => {
      return (
        <Card key={index + child.title} sx={{ maxWidth: 345, margin: 5 }}>
          <CardActionArea onClick={() => navigate(child.path)}>
            <CardMedia
              component="img"
              height="140"
              image={child.image}
              alt="green iguana"
              sx={{ objectFit: "contain" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {child.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {child.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });
  }
};

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item md={12} xs={12}>
        <Paper sx={{ p: 3 }}>
          <Box>
            <Typography gutterBottom variant="h5" component="div">
              Dashboard
            </Typography>
            <Box display={"flex"}>
              <Cards items={drawerMenu} />
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Dashboard;
