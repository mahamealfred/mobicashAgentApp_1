import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const Document = ({
  formData,
  setFormData,
  nIDErr,
  errorMessage,
  setErrorMessage,
  open,
  setOpen,
}) => {
  const handleClose = () => {
    setErrorMessage('')
    setOpen(false);
  };
  //const [docId,setDocId]=useState('')
  return (
    <React.Fragment>
      {!errorMessage ? null : (
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
            {errorMessage}
          </Alert>
        </Collapse>
      )}
      <Typography variant="h6" gutterBottom>
        HouseHold NID
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="NID"
            value={formData.nID}
            onChange={(e) =>
              setFormData({ ...formData, nID: e.target.value })
            }
            helperText={nIDErr ? nIDErr : ""}
            error={nIDErr}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Document;
