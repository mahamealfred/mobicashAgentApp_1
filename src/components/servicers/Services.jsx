import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CbhiIdentificationForm from "../../pages/servicespages/cbhi/CbhiIdentificationForm";
import RraForm from "../../pages/servicespages/rra/RraForm";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
const Services = () => {
  const { t } = useTranslation(["common","rra"]);
  const [open, setOpen] = React.useState(false);
  const [openRRA, setOpenRRA] = React.useState(false);

  const handleClickOpenRRA = () => {
    setOpenRRA(true);
  };
  const handleClickOpenCBHI=()=>{
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
    setOpenRRA(false);
  };
 
  return (
    <div class="option-section mb-15">
        <Dialog
        open={openRRA}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        
          <Typography variant="h6" color="gray" >
          {t("rra:rrataxpaymentservice")}
          </Typography>
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <RraForm/>
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h6" color="gray" >
          {"RSSB Payment Service"}
          </Typography>
          <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        <CbhiIdentificationForm/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
      <div class="row gx-3">
        <div class="col pb-15">
          <div class="option-card option-card-violet">
            <Button data-bs-toggle="modal" onClick={handleClickOpenRRA} >
            <div class="option-card-icon">
                <img
                  src="assets/images/rra-logo-pwa-1.png"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RRA</p>
            </Button>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-yellow">
            <Button data-bs-toggle="modal" onClick={handleClickOpenCBHI} >
            <div class="option-card-icon">
                <img
                  src="assets/images/rssb-logo-pwa-1.png"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RSSB</p>
            </Button>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-blue">
            {/* <a href="#" data-bs-toggle="modal" data-bs-target="#rnit-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/rnit-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RNIT</p>
            </a> */}
              <Button data-bs-toggle="modal" onClick={handleClickOpenCBHI} >
            <div class="option-card-icon">
                <img
                  src="assets/images/rnit-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RNIT</p>
            </Button>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-red">
            {/* <a href="#" data-bs-toggle="modal" data-bs-target="#ltss-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/ltss-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>LTSS</p>
            </a> */}
             <Button data-bs-toggle="modal" onClick={handleClickOpenCBHI} >
            <div class="option-card-icon">
                <img
                  src="assets/images/ltss-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>LTSS</p>
            </Button>
            
          </div>
        </div>

        <div class="col pb-15">
          <div class="option-card option-card-red">
            {/* <a href="#" data-bs-toggle="modal" data-bs-target="#reg-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/start-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>Electricity</p>
            </a> */}
             <Button data-bs-toggle="modal" onClick={handleClickOpenCBHI} >
            <div class="option-card-icon">
                <img
                  src="assets/images/start-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>Electricity</p>
            </Button>
          </div>
        </div>
        {/* <div class="col pb-15">
          <div class="option-card option-card-red">
             <Button data-bs-toggle="modal" onClick={handleClickOpenCBHI} >
            <div class="option-card-icon">
                <img
                  src="assets/images/reg-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>Startimes</p>
            </Button>
          </div>
        </div> */}
        {/* call all servicer here */}

        <div
          class="modal fade"
          id="rra-service"
          tabindex="-1"
          aria-labelledby="rra-service"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-down-arrow color-blue"></i>
                    <h5 class="modal-title">RRA Tax Payment Service</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                 <RraForm/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="rnit-service"
          tabindex="-1"
          aria-labelledby="rnit-service"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-down-arrow color-blue"></i>
                    <h5 class="modal-title">RNIT Fund Contribution</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group mb-15">
                      <label for="input3" class="form-label">
                        NID
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input3"
                        placeholder="1234-5467-76554-222"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input4" class="form-label">
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input4"
                        placeholder="Rnit"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input5" class="form-label">
                        Enter Amount
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input5"
                        placeholder="Rwf 2000.00"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn main-btn main-btn-lg full-width"
                    >
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="rssbCbhi"
          tabindex="-1"
          aria-labelledby="rssbCbhi"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-right-arrow color-yellow"></i>
                    <h5 class="modal-title">RSSB CBHI Contribution Payment</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                 <CbhiIdentificationForm/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="ltss-service"
          tabindex="-1"
          aria-labelledby="ltss-service"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-exchange-arrows color-red"></i>
                    <h5 class="modal-title">LTSS Ejo Heza Fund Contribution</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group mb-15">
                      <label for="input9" class="form-label">
                        NID
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input9"
                        placeholder="1222-22222-111-2222222"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input10" class="form-label">
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input10"
                        placeholder="Ltss"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input11" class="form-label">
                        Enter Amount
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input11"
                        placeholder="Rwf 210.00"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn main-btn main-btn-lg full-width"
                    >
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="reg-service"
          tabindex="-1"
          aria-labelledby="reg-service"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-exchange-arrows color-red"></i>
                    <h5 class="modal-title">Electricity Purchase</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group mb-15">
                      <label for="input9" class="form-label">
                        Meter Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input9"
                        placeholder="1222-22222-111-2222222"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input10" class="form-label">
                        To
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input10"
                        placeholder="Reg"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input11" class="form-label">
                        Enter Amount
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input11"
                        placeholder="Rwf 210.00"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn main-btn main-btn-lg full-width"
                    >
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="tv-service"
          tabindex="-1"
          aria-labelledby="tv-service"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="container">
                <div class="modal-header">
                  <div class="modal-header-title">
                    <i class="flaticon-exchange-arrows color-red"></i>
                    <h5 class="modal-title">TV Subscription Purchase</h5>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group mb-15">
                      <label for="input9" class="form-label">
                        Service Provider
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input9"
                        placeholder="Starttimes"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input10" class="form-label">
                        Subscriber Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input10"
                        placeholder="1111111111"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input11" class="form-label">
                        Enter Amount
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input11"
                        placeholder="Rwf 210.00"
                      />
                    </div>
                    <button
                      type="submit"
                      class="btn main-btn main-btn-lg full-width"
                    >
                      Pay
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
