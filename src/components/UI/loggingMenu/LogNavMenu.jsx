import React, { useState } from 'react';
import Modal from '../modal/Modal';

const LogNavMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div>
            <ul class="loggingmenu d-flex">
                <button onClick={() => setModalVisible(true)} class="nav_item logging"><li><a href="#">Log In</a></li></button>
                <button class="nav_item logging"><li><a href="#">Sign In</a></li></button>
            </ul>
            <Modal visible={modalVisible} setVisible={setModalVisible} />
        </div>
    );
};

export default LogNavMenu;