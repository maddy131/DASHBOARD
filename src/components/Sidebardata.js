import React from 'react'
import {  Grid , UserSettings,UserFavoriteAlt, VideoChat, CloudServiceManagement,Report, Settings, ArrowDown, ArrowUp, UserAvatarFilledAlt, UserFollow, UserAccess, VideoAdd, TableOfContents, TableBuilt, Add, Blog, MediaLibrary,ChartEvaluation, Analytics, DataAnalytics, SettingsView, PiggyBank, UserData,Video }  from '@carbon/icons-react';
export const Sidebardata=[
    {
        title: "Dashboard",
        path: "/Overview",
        icon: Grid,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
    
    },
    {
        title: "Users management",
        path: "/Users",
        icon: UserAvatarFilledAlt,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"View all users",
                path: "/Users/viewalluser",
                icon: UserAccess,
            },
            {
                title: "Add/Edit user",
                path: "/Users/AddEdituser",
                icon:  UserSettings,
            },
        ]
    },
    {
        title: "Classes & Workshop",
        path: "/Workshop",
        icon: VideoChat,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"View all classes",
                path: "/Workshop/viewallclasses",
                icon: Video,
            },
            {
                title: "Add/Edit classes",
                path: "/Workshop/AddEditclasses",
                icon:  VideoAdd,
            },
            {
                title:"View all Workshop",
                path: "/Workshop/viewallworkshop",
                icon: TableOfContents,
            },
            {
                title: "Add/Edit Workshop",
                path: "/Workshop/AddEditWorkshop",
                icon:  TableBuilt,
            },
        ]
    },
    {
        title: "corporate Wellness program",
        path: "/corporate",
        icon: UserFollow,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"View all programs",
                path: "/Users/viewallprogram",
                icon: UserFavoriteAlt,
            },
            {
                title: "Add/Edit Program",
                path: "/Users/AddEditprogram",
                icon:  Add,
            },
        ]
    },
    {
        title: "Content management",
        path: "/content",
        icon: CloudServiceManagement,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"Blog management",
                path: "/content/blogmanagement",
                icon: VideoAdd,
            },
            {
                title: "Media Library",
                path: "/content/medialibrary",
                icon:  MediaLibrary,
            },
        ]
    },
    {
        title: "Reports & analytics",
        path: "/report",
        icon: Report,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"User analysis",
                path: "/report/Useranalysis",
                icon: Analytics,
            },
            {
                title: "Financial Analysis",
                path: "/Report/FinancialAnalysis",
                icon:  DataAnalytics,
            },
            {
                title: "Performance Metrics",
                path: "/Report/performancemetrics",
                icon:  ChartEvaluation,
            },
        ]
    },
    {
        title: "Settings",
        path: "/Settings",
        icon: Settings,
        iconClosed: ArrowDown,
        iconOpend: ArrowUp,
        subNav: [
            {
                title:"General Settings",
                path: "/Settings/generalsettings",
                icon: SettingsView,
            },
            {
                title: "Subscription Plans",
                path: "/Settings/subscriptionplans",
                icon:  UserSettings,
            },
            {
                title:"Payment Settings",
                path: "/Settings/paymentsettings",
                icon: PiggyBank,
            },
            {
                title: "User Roles & permissions",
                path: "/Settings/userroles",
                icon:  UserData,
            },
        ]
    },
]
    
export default Sidebardata