import React from 'react'
import TopNav from '../../components/topNavigation/TopNav'
import {  Link } from "react-router-dom";
import Footer from '../../components/footer/Footer';
const Login = () => {
  return (
    <div>
    <TopNav/>
    <div class="body-content">
            <div class="container">
              <div class="page-header">
                <div class="page-header-title page-header-item">
                  {/*<img src="assets/images/logo.png" alt="logo"/>*/}
                  <h1>Sign In </h1>
                </div>
              </div>

              <div class="authentication-form pb-15">
                <form >
                  <input
                    type="hidden"
                    name="_token"
                    value="{{ csrf_token() }}"
                  />
                  <div class="form-group pb-15">
                    <label>User Name</label>
                    <div class="input-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required
                        placeholder=""
                        // value={this.state.username}
                        // onChange={(event) => {
                        //   this.setState({ username: event.target.value });
                        // }}
                      />
                      <span class="input-group-text">
                        <i class="flaticon-user-picture"></i>
                      </span>
                    </div>
                  </div>
                  <div class="form-group pb-15">
                    <label>Password</label>
                    <div class="input-group">
                      <input
                        type="password"
                        name="password"
                        class="form-control password"
                        required
                        placeholder="**********"
                        // value={this.state.password}
                        // onChange={(event) => {
                        //   this.setState({ password: event.target.value });
                        // }}
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
                        <input type="checkbox" id="check1" />
                        <label for="check1">Remember Me!</label>
                      </div>
                      
                    </div>
                    <div class="authentication-account-access-item">
                      <div class="authentication-link">
                        <Link
                          to="/forgetPassword"
                          data-bs-toggle="modal"
                          data-bs-target="#resetPassword"
                        >
                          Forget password?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">Error message</div>
                  
                  <button class="btn main-btn main-btn-lg full-width mb-10">
                    Sign In
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