import React from 'react';
import './Main.css'
import {ComponentMainSidebar, ComponentMain , ComponentMainNavbar } from './ComponentMain';
const Main: React.FC = () => {

    return(
        <>  
            <div><ComponentMainNavbar /></div>
            <div><ComponentMainSidebar /></div>
            <ComponentMain />
        </>
    );
};
export default Main;