import React, { useState, useEffect } from "react";
import '../styles/Profile.css';
import jwtDecode from "jwt-decode";

const Profile = () => {

    const [username, setUsername] = useState(""); 

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const decodedUsername = decodedToken.unique_name;
        setUsername(decodedUsername); 
    }, []);

    return (
        <div>
            <section class="profile_section">
                <div class="container">
                    <div class="row g-3">
                        <div class="col-xl-6 col-md-6 col-sm-6">
                            <a class="profile_section_card profile_enter_btn" href="">
                                <i class="bi bi-person"></i>
                                <h5>Hello, {username}</h5>
                            </a>
                        </div>
                        <div class="col-xl-3 col-md-6 col-sm-6">
                            <a class="profile_section_card fav_list_btn" href="">
                                <i class="bi bi-heart"></i>
                                <h5>Favorites</h5>
                            </a>
                        </div>
                        <div class="col-xl-3">
                            <a class="profile_section_card watch_later_btn" href="">
                                <i class="bi bi-bookmark"></i>
                                <h5>Watch Later</h5>
                            </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-4">
                            <a class="profile_section_card purchased_btn" href="">
                                <i class="bi bi-wallet"></i>
                                <h5>Purchased</h5>
                            </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-4">
                            <a class="profile_section_card history_btn" href="">
                                <i class="bi bi-clock-history"></i>
                                <h5>History</h5>
                            </a>
                        </div>
                        <div class="col-xl-3 col-md-4 col-sm-4">
                            <a class="profile_section_card settings_btn" href="">
                                <i class="bi bi-gear"></i>
                                <h5>Settings</h5>
                            </a>
                        </div>
                        <div class="col-xl-3">
                            <a class="profile_section_card support_btn" href="">
                                <i class="bi bi-headset"></i>
                                <h5>Support</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;