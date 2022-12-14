import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useState} from "react";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useTranslation } from "react-i18next";
const theme = createTheme();
theme.typography.h3 = {
    fontSize: '0.9rem',
    '@media (min-width:600px)': {
        fontSize: '0.9rem'
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem'
    }
};
const Document = ({
    formData,
    setFormData,
    docIdErr,
    errorMessage,
    setErrorMessage,
    open,
    setOpen
}) => {
    const { t } = useTranslation(["rra"]);
    const handleClose = () => {
        setErrorMessage('')
        setOpen(false);
    };
    // const [docId,setDocId]=useState('')
    return (
        <React.Fragment> {
            !errorMessage ? null : (
                <Collapse in={open}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleClose}>
                        <CloseIcon
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {errorMessage} </Alert>
                </Collapse>
            )
        }
            <ThemeProvider theme={theme}>
                <Typography variant="h6" color="gray"  align="center">
                    {t("rra:rradocid")}
                    </Typography>
            </ThemeProvider>
            {/* <Typography variant="h6" gutterBottom>
        Document ID
      </Typography> */}
            <Grid container
                spacing={3}>
                <Grid item
                    xs={12}>
                    <TextField id="address2" name="address2" label={t("rra:rradocid")}
                        value={
                            formData.docId
                        }
                        onChange={
                            (e) => setFormData({
                                ...formData,
                                docId: e.target.value
                            })
                        }
                        helperText={
                            docIdErr ? docIdErr : ""
                        }
                        error={docIdErr}
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Document;
