import React from 'react'
import TopNav from '../../components/topNavigation/TopNav'
import {  Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import {useState,useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { loginAction } from '../../redux/actions/loginAction';
import { useHistory } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
const Login = () => {
  const { t } = useTranslation(["login"]);
  const dispatch=useDispatch();
  const login=useSelector((state)=>state.login)
  const history=useHistory();
  const [username,setUsername]=useState();
  const [password,setPassword]=useState();
  const [errMessage,setErrMessage]=useState('')
  const [open, setOpen] = React.useState(true);

const handleSubmit=async()=>{

    await dispatch(loginAction({username,password},history));
    if(login.error){
      setOpen(true);
    }
}
const handleClose=()=>{
  setOpen(false)
}
  return (
    <div>
    <TopNav/>
    <div class="body-content">
            <div class="container">
              <div class="page-header">
                <div class="page-header-title page-header-item">
                  {/*<img src="assets/images/logo.png" alt="logo"/>*/}
                  <h1>{t("signin")}</h1>
                </div>
              </div>
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
                        //  onClick={() => {
                        //    setOpen(false);
                        //  }}
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
              <div class="authentication-form pb-15">
                <form >
                  {/* <input
                    type="hidden"
                    name="_token"
                    value="{{ csrf_token() }}"
                  /> */}
                  <div class="form-group pb-15">
                    <label>{t("username")}</label>
                    <div class="input-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required
                        placeholder=""
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                      />
                      <span class="input-group-text">
                        <i class="flaticon-user-picture"></i>
                      </span>
                    </div>
                  </div>
                  <div class="form-group pb-15">
                    <label>{t("password")}</label>
                    <div class="input-group">
                      <input
                        type="password"
                        name="password"
                        class="form-control password"
                        required
                        placeholder="**********"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                      <span class="input-group-text reveal">
                        <i class="flaticon-invisible pass-close"></i>
                        <i class="flaticon-visibility pass-view"></i>
                      </span>
                    </div>
                  </div>
                  <div class="authentication-account-access pb-15">
                    <div class="authentication-account-access-item">
                      <div class="input-checkbox">
                        <input type="checkbox" id="check1"/>
                        <label for="check1">{t("rememberMe")}!</label>
                      </div>
                      
                    </div>
                    <div class="authentication-account-access-item">
                      <div class="authentication-link">
                        <Link
                          to="/forgetPassword"
                          data-bs-toggle="modal"
                          data-bs-target="#resetPassword"
                        >
                          {t("forgotpassword")}?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-right"></div>
                  
                  <button onClick={handleSubmit} class="btn main-btn main-btn-lg full-width mb-10">
                    {login.loading?"Loading":`${t("signin")}`}
                  </button>
                </form>
                <div class="form-desc">
                  {/* Don’t have a Mobiswift account?{" "} */}
                  {/* <Link to="/signup">Please Sign Up Now Here!</Link> */}
                </div>
              </div>
            </div>
          </div>
         <Footer/>
         
  </div>
  )
}

export default Login