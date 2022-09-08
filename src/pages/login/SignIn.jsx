import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TopNav from '../../components/topNavigation/TopNav';
import Footer from '../../components/footer/Footer';
import { useTranslation } from "react-i18next";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../redux/actions/loginAction';
import { useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
const theme = createTheme();

export default function SignIn() {
  const { t } = useTranslation(["login"]);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login)
  const history = useHistory();
 
  const [usernameErrorMessage,setUsernameErrorMessage]=useState('');
  const [passwordErrorMessage,setPasswordErrorMessage]=useState('');
  const [open, setOpen] = React.useState(true);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values={
      username: data.get('username'),
      password: data.get('password'),
    }
    if(values.username==="" && values.password===""){
      setUsernameErrorMessage("username is required")
      setPasswordErrorMessage("Password is required")
    }
    else if(values.username===""){
      setUsernameErrorMessage("username is required")
    }
    else if(values.password===""){
      setPasswordErrorMessage("Password is required")
    }
    else{
      setUsernameErrorMessage("")
      setPasswordErrorMessage("")
      await dispatch(loginAction(values,history));
    }
       if(login.error){
      setOpen(true);
    }
  };
  const handleClose=()=>{
    setOpen(false)
  }

  return (
    <React.Fragment>
      <TopNav />
      <div class="body-content">
        <div class="container">
          <div class="page-header">
            <div class="page-header-title page-header-item">

              <h2>{t("signin")}</h2>
            </div>
          </div>
          
          <div class="authentication-form pb-15">
          <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      {
                  !login.error? null:
                   <Collapse in={open}>
                   <Alert
                   severity="error"
                     action={
                       <IconButton
                         aria-label="close"
                         color="inherit"
                         size="small"
                         onClick={handleClose}
                       >
                         <CloseIcon fontSize="inherit" />
                       </IconButton>
                     }
                     sx={{ mb: 0.2 }}
                   >
                    {login.error}
                   </Alert>
                 </Collapse>
                }    
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          
          }}
        >
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label={t("username")}
              name="username"
              autoComplete="email"
              helperText={usernameErrorMessage ? usernameErrorMessage : ""}
              error={usernameErrorMessage}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("password")}
              type="password"
              id="password"
              helperText={passwordErrorMessage ? passwordErrorMessage : ""}
              error={passwordErrorMessage}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("rememberMe")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="warning"
              sx={{ mt: 3, mb: 2 }}
            >
               {login.loading?"Loading":`${t("signin")}`}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                {t("forgotpassword")}?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                   {t("agreetermsandconditions")}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>

  );
}