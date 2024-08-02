import React, { useState } from "react";

//import {  Grid , UserSettings,UserFavoriteAlt, VideoChat, CloudServiceManagement,Report, Settings, ArrowDown, ArrowUp, UserAvatarFilledAlt, UserFollow, UserAccess, VideoAdd, TableOfContents, TableBuilt, Add, Blog, MediaLibrary, VisualRecognition, MedicationAlert, Analytics, DataAnalytics, SettingsView, PiggyBank, UserData, Close, Icon }  from '@carbon/icons-react';
import { Sidebardata } from "./Sidebardata";
import SubMenu from "./SubMenu";
import {SideNav,SideNavIcon} from '@carbon/react';
import { Close } from "@carbon/icons-react";
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SideNav sidebar={sidebar}>
    
        {/* <SideNavIcon 
                Icon : Close 
                onClick={showSidebar}
            >
        </SideNavIcon> */}
        {Sidebardata.map((item, index) => {
            return (
                <SubMenu/>
            );
        })}
    
</SideNav>



);
};

export default Sidebar;
