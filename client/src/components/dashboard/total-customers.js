import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "success.main",
              height: 56,
              width: 56,
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography color="textPrimary" variant="h4">
            85
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Clients
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
