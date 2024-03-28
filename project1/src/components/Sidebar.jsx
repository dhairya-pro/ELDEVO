import React, { useState } from 'react';
import './Sidebar.css';
import s1 from './elder_tech.png';
import s2 from './community.png';
import s3 from './emergency.png';
import s4 from './homeservice.png';
import s5 from './lab.png';
import s6 from './medical.png';
import s7 from './respite_care.png';
import s8 from './transportation.png';
import s9 from './logo.png';
import { FaBars } from 'react-icons/fa';
import Eldertech from '../pages/Eldertech';
import Community from '../pages/Community';
import Emergency from '../pages/Emergency';
import Healthcare from '../pages/Healthcare';
import Homeservice from '../pages/Homeservice';
import Lab from '../pages/Lab';
import Respitecare from '../pages/Respitecare';
import Transportation from '../pages/Transportation';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedItem, setSelectedItem] = useState({
        path: "/eldertech",
        name: "Elder Tech",
        image: s1,
        component: <Eldertech />
    });

    const menuItems = [
        { path: "/eldertech", name: "Elder Tech", image: s1, component: <Eldertech /> },
        { path: "/community", name: "Community", image: s2, component: <Community /> },
        { path: "/emergency", name: "Emergency", image: s3, component: <Emergency /> },
        { path: "/healthcare", name: "Healthcare", image: s6, component: <Healthcare /> },
        { path: "/homeservice", name: "Home Service", image: s4, component: <Homeservice /> },
        { path: "/lab", name: "Lab", image: s5, component: <Lab /> },
        { path: "/respitecare", name: "Respite Care", image: s7, component: <Respitecare /> },
        { path: "/transportation", name: "Transportation", image: s8, component: <Transportation /> },
    ];

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="sidebar-container">
            {/* <FaBars className="fabars-icon" onClick={() => setIsOpen(!isOpen)} />   */}
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar-services">
                <div className="top-section">
                    <div style={{ display: isOpen ? "block" : "none" }} className="logo">
                        <img src={s9} className='main-logo' alt="logo" />
                    </div>
                </div>
                {menuItems.map((item, index) => (
                    <div key={index} className="link" onClick={() => handleItemClick(item)}>
                        <div className='sidebar-icon'>
                            <img src={item.image} alt={item.name} className='sidebar-logo' />
                        </div>
                        <div style={{ display: isOpen ? "block" : "none" }} className='link-text'>{item.name}</div>
                    </div>
                ))}
            </div>
            <main>
                <div className="selected-item">
                    {selectedItem.component}
                </div>
            </main>
        </div>
    );
};

export default Sidebar;
