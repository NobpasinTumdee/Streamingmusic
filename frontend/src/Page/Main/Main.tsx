import React from 'react';
import './Main.css'
import {ComponentMainSidebar, ComponentMain , ComponentMainNavbar , BottonMain} from './ComponentMain';
const Main: React.FC = () => {

    return(
        <>  
            <div><ComponentMainNavbar /></div>
            <div><ComponentMainSidebar /></div>
            <ComponentMain />
            <BottonMain />
        </>
    );
};
export default Main;