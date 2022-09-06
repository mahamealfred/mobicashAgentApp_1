import React ,{useEffect} from 'react'
import './topnav.css'
import {Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import i18next from "i18next";
const TopNav = () => {
  const { i18n, t } = useTranslation(["common"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("ki");
		}
	}, []);

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};
    return (
        <div>
            <div class="header-bg header-bg-1"></div>
            <div class="fixed-top">
                <div class="appbar-area sticky-black">
                    <div class="container">
                        <div class="appbar-container">
                            <div class="appbar-item appbar-actions">
                                <div class="appbar-action-item">
                                    <a href="#" class="appbar-action-bar" data-bs-toggle="modal" data-bs-target="#sidebarDrawer">
                                        <i class="flaticon-menu"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="appbar-item appbar-actions">
                                <div class="appbar-action-item">
                                    <a href="#" class="back-page">
                                        {" "}
                                        <img src="images/img_144.png" alt="logo" className='avaterIcon'/> {/* <i class="flaticon-left-arrow"></i> */}
                                        <i>Mobicash Agent App</i>
                                    </a>
                                </div>
                            </div>
                            <div class="appbar-item appbar-page-title mx-auto">
                                <h1></h1>

                            </div>
                            <div class="appbar-item appbar-options">
                                <div class="appbar-option-item appbar-option-notification">
                                    <select class="form-select form-select-sm" 
                                    aria-label=".form-select-sm example"
                                    value={localStorage.getItem("i18nextLng")}
							                       onChange={handleLanguageChange}
                                    >
                                        <option value="en">Eng</option>
                                        <option value="ki">Kiny</option>
                                        <option value="fr">Fran</option>
                                    </select>
                                </div>
                                {/* <div class="appbar-option-item appbar-option-profile">
                      <i class="flaticon-bell"></i>
                      <Link to="/settings">
                        <img src="assets/images/profile.PNG" alt="profile" />
                      </Link>
                    </div> */} </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default TopNav
