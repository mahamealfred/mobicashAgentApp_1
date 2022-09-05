import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';


export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Transactions Details
      </Typography>
      <List disablePadding>
    
          <ListItem  sx={{ py: 1, px: 0 }}>
            <ListItemText primary=
            "Payer Name" secondary="Mahame alfres" />
            <Typography variant="body2">Mahame</Typography>
          </ListItem>
        

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Amount Paid" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            3500 Rwf
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Agent Name
          </Typography>
          <Typography gutterBottom>NSABIMANA JEAN </Typography>
          <Typography gutterBottom></Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
           
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Transaction Id</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>M24876</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Description</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>MUTUELLE service</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>12/08/2022</Typography>
                </Grid>
              </React.Fragment>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Status</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>success</Typography>
                </Grid>
              </React.Fragment>
        
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}