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
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDocDetailsAction } from "../../../redux/actions/getDocDetailsAction";
import { rraPayamentAction } from "../../../redux/actions/rraPaymentAction";

const steps = ["Document ID", "Make Payment ", "View your payment"];

const theme = createTheme();

const RraForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const getDocDetails = useSelector((state) => state.getDocDetails);
  const rraPayment = useSelector((state) => state.rraPayment);
  const [formData, setFormData] = useState({
    docId: "",
    phoneNumber: "",
    password: "",
  });
  //rra get details
  const [docIdErr, setDocIdErr] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //rra payments
  const [paymenterrorMessage, setPaymenterrorMessage] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("jeanc2");
  const [bankName, setBankName] = useState("");
  const [rraRef, setRraRef] = useState("");
  const [tin, setTin] = useState("");
  const [taxPayerName, setTaxPayerName] = useState("");
  const [taxTypeDesc, setTaxTypeDesc] = useState("");
  const [taxCenterNo, setTaxCenterNo] = useState("");
  const [taxTypeNo, setTaxTypeNo] = useState("");
  const [assessNo, setAssessNo] = useState("");
  const [rraOrginNo, setRraOrginNo] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [descId, setDescId] = useState("");
  const [payerPhone, setPayerPhone] = useState("");
  const [brokering, setBrokering] = useState("");
  const [userGroup, setUserGroup] = useState("");
  //all

  const [open, setOpen] = React.useState(true);
  const [docDetails, setDocDetails] = useState("");
  const history = useHistory();

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Document
            formData={formData}
            setFormData={setFormData}
            docIdErr={docIdErr}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            open={open}
            setOpen={setOpen}
          />
        );
      case 1:
        return (
          <Payment
            formData={formData}
            setFormData={setFormData}
            phoneNumberError={phoneNumberError}
            passwordError={passwordError}
            taxPayerName={taxPayerName}
            rraRef={rraRef}
            amountToPay={amountToPay}
            paymenterrorMessage={paymenterrorMessage}
            setPaymenterrorMessage={setPaymenterrorMessage}
            open={open}
            setOpen={setOpen}
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
      if (!getDocDetails.loading) {
        if (getDocDetails.details.length !== 0) {
          //await setDocDetails(getDocDetails.details)
          if (getDocDetails.details.responseCode === 200) {
            setBankName(getDocDetails.details.bank_name);
            setRraRef(getDocDetails.details.RRA_REF);
            setTin(getDocDetails.details.TIN);
            setTaxPayerName(getDocDetails.details.TAX_PAYER_NAME);
            setTaxTypeDesc(getDocDetails.details.TAX_TYPE_DESC);
            setTaxCenterNo(getDocDetails.details.TAX_CENTRE_NO);
            setTaxTypeNo(getDocDetails.details.TAX_TYPE_NO);
            setAssessNo(getDocDetails.details.ASSESS_NO);
            setRraOrginNo(getDocDetails.details.RRA_ORIGIN_NO);
            setAmountToPay(getDocDetails.details.AMOUNT_TO_PAY);
            setDescId(getDocDetails.details.DEC_ID);
            handleNext();
          } else {
            return null;
          }
          //  console.log("doc ...doc",getDocDetails.details.responseCode)
        }
        if (getDocDetails.error) {
          setErrorMessage(getDocDetails.error);
        }
      }
    }
   
    fetchData();
   
  }, [getDocDetails.details]);

  useEffect(()=>{
async function fetchData(){
  
  if(!rraPayment.loading){
    if(rraPayment.details){
      console.log(" result form payment",rraPayment.details)
    }
  }
  else if(rraPayment.error){
    console.log(" error form payment",rraPayment.error)
  }
  else{
    return null;
   
  }
 
}
fetchData();
  },[rraPayment.details,rraPayment.error])

  //handle request for rra document id
  const handleDocmentDetails = async () => {
    if (formData.docId === "") {
      setDocIdErr("Documnet ID is required");
    } else if (!Number(formData.docId)) {
      setDocIdErr("Documnet ID must be a number");
    } else {
      const docId = formData.docId;
      await dispatch(getDocDetailsAction({ docId }, history));
    }
  };

  //handle rra Payament
  const handlePayment = async () => {
    if (formData.phoneNumber === "") {
      setPhoneNumberError("Phone number is required");
    } else if (!Number(formData.phoneNumber)) {
      setPhoneNumberError("Phone number must be a number");
    } else if (formData.password === "") {
      setPasswordError("Password is required");
    } else {
      const payerPhoneNumber = formData.phoneNumber;
      const password = formData.password;
      await dispatch(
        rraPayamentAction(
          {
            bankName,
            rraRef,
            tin,
            taxPayerName,
            taxTypeDesc,
            taxCenterNo,
            taxTypeNo,
            assessNo,
            rraOrginNo,
            amountToPay,
            descId,
            payerPhoneNumber,
            userGroup,
            brokering,
          },
          username,
          password,
          history
        )
      );
      
    }
  };

  //handle on button submit for each step
  const handelSubmit = () => {
    if (activeStep === 0) {
      handleDocmentDetails();
    } else if (activeStep === 1) {
      handlePayment();
    } else if (activeStep === 2) {
      handleNext();
    } else {
      return null;
    }
    if (getDocDetails.error) {
      setOpen(true);
    }
    if (rraPayment.error) {
      setOpen(true);
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
    formData.password = "";
    setDocIdErr("");
    setPasswordError("");
    setPhoneNumberError("");
    setErrorMessage("");
    setPaymenterrorMessage("");
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