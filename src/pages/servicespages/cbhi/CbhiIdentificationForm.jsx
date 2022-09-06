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

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Document from "../../../components/servicers/cbhi/Document";
import Payment from "../../../components/servicers/cbhi/Payment";
import Review from "../../../components/servicers/cbhi/Review";
const steps = ["Document ID", "Make Payment ", "View your payment"];

const theme = createTheme();
theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};


const CbhiIdentificationForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
 
  const [formData, setFormData] = useState({
    docId: "",
    phoneNumber: "",
    password: "",
  });
  //rra get details
  //rra payments
  //all
  const history = useHistory();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Document
            formData={formData}
            setFormData={setFormData}
         
          />
        );
      case 1:
        return (
          <Payment
            formData={formData}
            setFormData={setFormData}
            
          />
        );
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  useEffect(() => {
    async function fetchData() {
      
    }
    fetchData();
   
  },[]);

  useEffect(()=>{
async function fetchData(){
  
  
}
fetchData();
  },[])

  //handle request for rra document id
  const handleDocmentDetails = async () => {
    
  };

  //handle rra Payament
  const handlePayment = async () => {
    
  };

  //handle on button submit for each step
  const handelSubmit = () => {
    if (activeStep === 0) {
      handleNext();
    } else if (activeStep === 1) {
      handleNext();
    } else if (activeStep === 2) {
      handleNext();
    } else {
      return null;
    }
   
  };

  const handleBackToHome = () => {
    history.push("/dashboard", { push: true });
    window.location.reload();
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    
    setActiveStep(activeStep - 1);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{display:{xs:"flex",sm:"flex",md:"block",lg:"block"}, mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <ThemeProvider theme={theme}>
           <Typography variant="h3" align="center"> MUTUELLE SERVICE</Typography>
           </ThemeProvider>
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
                    You have successfull pay mutuelle service year 2022
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
                      <Button onClick={handleBack} 
                     // sx={{ mt: 3, ml: 1 }}
                      sx={{ my: 1, mx: 1.5 }}
                      >
                        Back
                      </Button>
                    )}

                    <Button
                      variant="outlined"
                      onClick={handelSubmit}
                     // sx={{ mt: 3, ml: 1 }}
                     sx={{ my: 1, mx: 1.5 }}
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

export default CbhiIdentificationForm;
