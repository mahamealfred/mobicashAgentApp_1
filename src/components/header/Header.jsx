import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useTranslation } from "react-i18next";

function PricingContent() {
  const { t } = useTranslation(["header"]);
  const tiers = [
    {
      title: `${t("mobicashsupport")}`,
      price: '0',
      description:`${t("supportdescription")}`,
      buttonText:`${t("contactus")}` ,
      buttonVariant: 'outlined',
    },
    {
      title: `${t("thingsyoucando")}`,
      //subheader: 'Payment Service',
      price: '15',
      description: `${t("thingsyoucandodescription")}`,
      buttonText: `${t("getstarted")}`,
      buttonVariant: 'contained',
      buttonColor:'#FFFF'
    },
    {
      title: `${t("myaccount")}`,
      price: '30',
      description: `${t("myaccountdescription")}`,
      buttonText: `${t("myaccount")}`,
      buttonVariant: 'outlined',
    },
  ];
  
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'My Account' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                 // subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'My Account' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {/* ${tier.price} */}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {/* /mo */}
                    </Typography>
                  </Box>
                  <ul>
                    
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        // key={line.description}
                      >
                        {tier.description.split(',').join('\n')}
                      </Typography>
                   
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    color="warning"
                   variant={tier.buttonVariant=='outlined'?'outlined':'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
       
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}