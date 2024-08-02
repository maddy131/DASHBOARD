import React from 'react';
import { 
    Grid, UserSettings, UserFavoriteAlt, VideoChat, CloudServiceManagement, Report, Settings, 
    ArrowDown, ArrowUp, UserAvatarFilledAlt, UserFollow, UserAccess, VideoAdd, TableOfContents, 
    TableBuilt, Add, Blog, MediaLibrary, ChartEvaluation, Analytics, DataAnalytics, SettingsView, 
    PiggyBank, UserData, Video 
} from '@carbon/icons-react';

export const Sidebardata = [
    {
        title: "Dashboard",
        path: "/Overview",
        icon: <Grid />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
    },
    {
        title: "Usersmanagement",
        path: "/Users",
        icon: <UserAvatarFilledAlt />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "Viewallusers",
                path: "/Users/viewalluser",
                icon: <UserAccess />,
            },
            {
                title: "AddEdituser",
                path: "/Users/AddEdituser",
                icon: <UserSettings />,
            },
        ]
    },
    {
        title: "Classes_Workshop",
        path: "/Workshop",
        icon: <VideoChat />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "View_all_classes",
                path: "/Workshop/viewallclasses",
                icon: <Video />,
            },
            {
                title: "Add_Edit_classes",
                path: "/Workshop/AddEditclasses",
                icon: <VideoAdd />,
            },
            {
                title: "View_all_Workshop",
                path: "/Workshop/viewallworkshop",
                icon: <TableOfContents />,
            },
            {
                title: "Add_Edit_Workshop",
                path: "/Workshop/AddEditWorkshop",
                icon: <TableBuilt />,
            },
        ]
    },
    {
        title: "Corporate_Wellness_program",
        path: "/corporate",
        icon: <UserFollow />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "View_all_programs",
                path: "/Users/viewallprogram",
                icon: <UserFavoriteAlt />,
            },
            {
                title: "Add_Edit_Program",
                path: "/Users/AddEditprogram",
                icon: <Add />,
            },
        ]
    },
    {
        title: "Content_management",
        path: "/content",
        icon: <CloudServiceManagement />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "Blog_management",
                path: "/content/blogmanagement",
                icon: <Blog />,
            },
            {
                title: "Media_Library",
                path: "/content/medialibrary",
                icon: <MediaLibrary />,
            },
        ]
    },
    {
        title: "Reports_and_analytics",
        path: "/report",
        icon: <Report />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "User_analysis",
                path: "/report/Useranalysis",
                icon: <Analytics />,
            },
            {
                title: "Financial_Analysis",
                path: "/Report/FinancialAnalysis",
                icon: <DataAnalytics />,
            },
            {
                title: "Performance_Metrics",
                path: "/Report/performancemetrics",
                icon: <ChartEvaluation />,
            },
        ]
    },
    {
        title: "Settings",
        path: "/Settings",
        icon: <Settings />,
        iconClosed: <ArrowDown />,
        iconOpend: <ArrowUp />,
        subNav: [
            {
                title: "General_Settings",
                path: "/Settings/generalsettings",
                icon: <SettingsView />,
            },
            {
                title: "Subscription_Plans",
                path: "/Settings/subscriptionplans",
                icon: <UserSettings />,
            },
            {
                title: "Payment_Settings",
                path: "/Settings/paymentsettings",
                icon: <PiggyBank />,
            },
            {
                title: "User_Roles_and_permissions",
                path: "/Settings/userroles",
                icon: <UserData />,
            },
        ]
    },
];

export default Sidebardata;
