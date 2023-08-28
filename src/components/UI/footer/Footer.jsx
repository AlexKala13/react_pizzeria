import React from 'react';

const Footer = () => {
    return (
        <div class="container">
            <footer class="py-5">
                <div class="row">
                    <div class="col-xl-3 col-md-2 mb-3">
                        <h5>Follow us</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Facebook</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Instagram</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Twitter</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">TikTok</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-3 col-md-2 mb-3">
                        <h5>Contact us</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">+032 (2)-22-23-24</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">(+995) 599-28-28-28</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">pizzeria@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="col-xl-6">
                        <div class="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.7370205236098!2d44.759856507906235!3d41.72619325567727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472dfe09bc2a3%3A0xcc6fb5508dabad8f!2zMTUg4YOQ4YOa4YOU4YOl4YOh4YOQ4YOc4YOT4YOg4YOUIOGDp-GDkOGDluGDkeGDlOGDkuGDmOGDoSDhg5Lhg5Dhg5vhg5bhg5jhg6Dhg5gsIOGDl-GDkeGDmOGDmuGDmOGDoeGDmA!5e0!3m2!1ska!2sge!4v1685395597507!5m2!1ska!2sge" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="footerline"></div>
                        <p class="">© 2023 Pizzeria. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;