import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import { Navigate ,useHistory} from "react-router-dom";
import Services from "../../components/servicers/Services";
import { Button } from "@mui/material";
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import Header from '../../components/header/Header'
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const Home = () => {
  const history=useHistory();
  const { t } = useTranslation(["home","common","login"]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let navigate=useHistory();
  const handleHome=()=>{
    handleClickOpen();
  }
  const handleLogout = () => {
    localStorage.removeItem("mobicashAuth");
    sessionStorage.removeItem("mobicash-auth")
    history.push("/", { push: true });
    window.location.reload(true);
  };
  return (
    <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           home
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <div class="body-content body-content-lg">
        <div class="container">
          <div class="add-card section-to-header mb-30">
            <div class="add-card-inner">
              <div class="add-card-item add-card-info">
                {/* <p>{t("dear")}:  Agent Name</p> */}
                <Typography  variant="body2"  >
                {t("dear")}:  Agent Name
                </Typography>
                <Typography  variant="body2"  >
                {t("welcometomobicash")}
                </Typography>
               
              </div>
              <div
                class="add-card-item add-card-info"
                data-bs-toggle="modal"
                data-bs-target="#addBalance"
              >
                <Link to="#">
                  <i class="flaticon-plus"></i>
                </Link>
                {/* <p>{t("common:myprofile")}</p> */}
                <Typography  variant="body2"  >
                {t("common:myprofile")}
                </Typography>
               
              </div>
            </div>
          </div>
          <Services />
          <Header/>
         
            <Footer/>
          {/* home */}
        </div>
      </div>


      {/* <div class="app-navbar">
        <div class="container">
          <div class="navbar-content ">
            <div class="navbar-content-item">
              <Link to="/">
                <i class="flaticon-house"></i>
                Home 
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="/dashboard" class="active">
                <i class="flaticon-credit-card"></i>
                Services
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="/qrpayments">
                <i class="flaticon-invoice"></i>
                About us
              </Link>
            </div>
            <div class="navbar-content-item">
              <Link to="/mservices">
                <i class="flaticon-menu-1"></i>
                Contact
              </Link>
            </div>

            <div class="navbar-content-item">
              <Link to="/settings">
                <i class="flaticon-settings"></i>
                Web site
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <div
        class="modal fade"
        id="sidebarDrawer"
        tabindex="-1"
        aria-labelledby="sidebarDrawer"
        aria-hidden="true"
      >
        <div class="modal-dialog side-modal-dialog">
          <div class="modal-content">
            <div class="modal-header sidebar-modal-header">
              <div class="sidebar-profile-info">
                <div class="sidebar-profile-thumb">
                  <img src="assets/images/profile.PNG" alt="profile" />
                </div>
                <div class="sidebar-profile-text">
                  <h3>{t("login:username")}</h3>
                  <p>
                    <Link to="#">0789595309</Link>
                  </p>
                </div>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="sidebar-profile-wallet">
              <div class="add-card-info">
                <p>{t("home:mybalance")}:</p>
                <h3>Rwf 2,000.50</h3>
              </div>
            </div>
            <div class="modal-body">
              <div class="sidebar-nav">
                <div class="sidebar-nav-item">
                  <h3>{t("home:mobicashagentappmenu")}</h3>
                  <ul class="sidebar-nav-list">
                    <li>
                    <div class="navbar-content-item">
                    <Button class="flaticon-house" onClick={handleHome}>
                    {t("home:home")}
                    </Button> 
                    </div>
                      {/* <Link to="/dashboard">
                        <i class="flaticon-house"></i> Home
                      </Link> */}
                    </li>
                    <li>
                      <Link to="/mycards" class="active">
                        <i class="flaticon-credit-card"></i> Previous
                        Transaction
                      </Link>
                    </li>
                    <li>
                      <Link to="/qrpayments">
                        <i class="flaticon-invoice"></i>My Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/mservices">
                        <i class="flaticon-menu-1"></i> Mobicash Services
                      </Link>
                    </li>

                    <li>
                      <Link to="/settings">
                        <i class="flaticon-settings"></i> Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactUs">
                        <i class="flaticon-call-center-agent"></i> Get In Touch
                      </Link>
                    </li>
                    <li>
                      <Link to="/about">
                        <i class="flaticon-call-center-agent"></i>About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq">
                        <i class="flaticon-call-center-agent"></i>Change
                        password
                      </Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout}>
                        <i class="flaticon-logout"></i> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-top" id="scrolltop">
        <div class="scroll-top-inner">
          <i class="icofont-long-arrow-up"></i>
        </div>
      </div>
    </div>
  );
};

export default Home;
