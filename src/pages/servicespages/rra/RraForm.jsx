import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Document from "../../../components/servicers/rra/Document";
import Payment from "../../../components/servicers/rra/Payment";
import Review from "../../../components/servicers/rra/Review";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const steps = ["Document ID", "Make Payment ", "View your payment"];

const theme = createTheme();

const RraForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = useState({
    docId: "",
    phoneNumber: "",
    password: "",
  });
  const [docIdErr, setDocIdErr] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const history=useHistory()
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Document
            formData={formData}
            setFormData={setFormData}
            docIdErr={docIdErr}
          />
        );
      case 1:
        return (
          <Payment
            formData={formData}
            setFormData={setFormData}
            phoneNumberError={phoneNumberError}
            passwordError={passwordError}
          />
        );
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  //handle request for rra document id
  const handleDocmentDetails = () => {
    if (formData.docId === "") {
      setDocIdErr("Documnet ID is required");
    } else if (!Number(formData.docId)) {
      setDocIdErr("Documnet ID must be a number");
    } else {
      handleNext();
    }
  };

  //handle rra Payament
  const handlePayment = () => {
    if (formData.phoneNumber === "") {
      setPhoneNumberError("Phone number is required")
    }
    else if (!Number(formData.phoneNumber)) {
      setPhoneNumberError("Phone number must be a number")
    }  
    else if (formData.password=== "") {
      setPasswordError("Password is required")
    } 
    else {
      handleNext();
    }
  };

  //handle on button submit for each step
  const handelSubmit = () => {
    if (activeStep === 0) {
      handleDocmentDetails();
    } else if (activeStep === 1) {
      handlePayment();
    }
    else if (activeStep === 2) {
      handleNext()
    }
    else {
      return null;
    }
  };

  const handleBackToHome=()=>{
history.push('/dashboard',{push:true})
window.location.reload()
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    formData.password=""
    setDocIdErr("");
    setPasswordError("")
    setPhoneNumberError("")
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      
 <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{ mb: 2 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            RRA SERVICE
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for using Mobicash payment.
                </Typography>
                <Typography variant="subtitle1">
                  You have successfull pay rra service year 2022
                </Typography>
                <Button onClick={handleBackToHome} sx={{ mt: 3, ml: 1 }}>
                  New Payment
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handelSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {/* {activeStep === steps.length - 1 ? 'Mke payment' : 'Next'} */}
                    {activeStep === steps.length - 1
                      ? "Print Receipt"
                      : activeStep === 0
                      ? "send"
                      : "Make Payment"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
    </div>
   
  );
};

export default RraForm;
