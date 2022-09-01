
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {useState} from "react";
const Document = ({formData,setFormData,docIdErr}) => {
    //const [docId,setDocId]=useState('')
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Document ID
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Document Id"
            value={formData.docId}
            onChange={(e)=>setFormData({...formData,docId:e.target.value})}
            helperText={docIdErr? docIdErr : ""}
            error={docIdErr}
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  )
}

export default Document