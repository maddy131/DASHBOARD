import React, { useState } from "react";

import {SideNavLink,Dropdown, SideNavHeader} from '@carbon/react';
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SideNavLink
                to={item.path}
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <SideNavHeader>
                        {item.title}
                    </SideNavHeader>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SideNavLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Dropdown
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <SideNavHeader>
                                {item.title}
                            </SideNavHeader>
                        </Dropdown>
                    );
                })}
        </>
    );
};

export default SubMenu;