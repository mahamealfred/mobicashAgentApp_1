import React from "react";
import { Link } from "react-router-dom";
import RraForm from "../../pages/servicespages/rra/RraForm";
const Services = () => {
  return (
    <div class="option-section mb-15">
      <div class="row gx-3">
        <div class="col pb-15">
          <div class="option-card option-card-violet">
            <a href="#" data-bs-toggle="modal" data-bs-target="#rra-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/rra-logo-pwa-1.png"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RRA</p>
            </a>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-yellow">
            <a href="#" data-bs-toggle="modal" data-bs-target="#rssbCbhi">
              <div class="option-card-icon">
                <img
                  src="assets/images/rssb-logo-pwa-1.png"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RSSB</p>
            </a>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-blue">
            <a href="#" data-bs-toggle="modal" data-bs-target="#rnit-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/rnit-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>RNIT</p>
            </a>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-red">
            <a href="#" data-bs-toggle="modal" data-bs-target="#ltss-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/ltss-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>LTSS</p>
            </a>
          </div>
        </div>

        <div class="col pb-15">
          <div class="option-card option-card-red">
            <a href="#" data-bs-toggle="modal" data-bs-target="#reg-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/start-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>Electricity</p>
            </a>
          </div>
        </div>
        <div class="col pb-15">
          <div class="option-card option-card-red">
            <a href="#" data-bs-toggle="modal" data-bs-target="#tv-service">
              <div class="option-card-icon">
                <img
                  src="assets/images/reg-pwa-logo-1.jpg"
                  alt="logo"
                  class="main-logo"
                />
              </div>
              <p>Starttimes</p>
            </a>
          </div>
        </div>
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
                  <form>
                    <div class="form-group mb-15">
                      <label for="input6" class="form-label">
                        NID
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input6"
                        placeholder="1111-11222-1111-222"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input7" class="form-label">
                        CBHI Category
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input7"
                        placeholder="CBHI Category"
                      />
                    </div>
                    <div class="form-group mb-15">
                      <label for="input8" class="form-label">
                        Enter Amount
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="input8"
                        placeholder="Rwf 230.00"
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
