import React, { useState } from "react";
import PropTypes from 'prop-types';
import { SideNavLink, Dropdown, SideNavHeader } from '@carbon/react';

const SubMenu = ({ item }) => {
    const [subNav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subNav);

    if (!item) {
        console.error('item is undefined');
        return null;
    }

    const { path, icon, title, subNav: subNavItems, iconOpened, iconClosed } = item;

    if (!path) {
        console.error('item.path is undefined', item);
        return null;
    }

    return (
        <>
            <SideNavLink
                to={path}
                onClick={subNavItems ? showSubnav : undefined}
            >
                <div>
                    {icon}
                    <SideNavHeader>
                        {title}
                    </SideNavHeader>
                </div>
                <div>
                    {subNavItems && subNav
                        ? iconOpened
                        : subNavItems
                        ? iconClosed
                        : null}
                </div>
            </SideNavLink>
            {subNav && subNavItems && subNavItems.map((subItem, index) => {
                if (!subItem || !subItem.path) {
                    console.error('subItem or subItem.path is undefined', subItem);
                    return null;
                }

                return (
                    <Dropdown
                        to={subItem.path}
                        key={index}
                    >
                        {subItem.icon}
                        <SideNavHeader>
                            {subItem.title}
                        </SideNavHeader>
                    </Dropdown>
                );
            })}
        </>
    );
};

SubMenu.propTypes = {
    item: PropTypes.shape({
        path: PropTypes.string.isRequired,
        icon: PropTypes.node,
        title: PropTypes.string.isRequired,
        subNav: PropTypes.arrayOf(PropTypes.shape({
            path: PropTypes.string.isRequired,
            icon: PropTypes.node,
            title: PropTypes.string.isRequired,
        })),
        iconOpened: PropTypes.node,
        iconClosed: PropTypes.node,
    }).isRequired,
};

export default SubMenu;
