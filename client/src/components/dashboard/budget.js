import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import MoneyIcon from "@mui/icons-material/Money";

export const Budget = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography color="textPrimary" variant="h4">
            198
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Projects
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
