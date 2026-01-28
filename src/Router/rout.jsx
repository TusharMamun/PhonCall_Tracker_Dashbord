import { createBrowserRouter } from "react-router";
import DashbordLayout from "../Layout/DashbordLayout";
import DashbordOverview from "../Page/DashbordOverviwPage/DashbordOverview";
import CallLog from "../Page/CallLogPage.jsx/CallLog";
import Settings from "../Page/SettingPage/Settings";
import Appointments from "../Page/AppointMentPage/Appointments";

export const route = createBrowserRouter([
    {
    path:'/',
        Component:DashbordLayout,
        children:[
            {
    index:true,
    Component:DashbordOverview
            },
            {
                path:"/call-logs",
                Component:CallLog
            },
                {
                path:'/appointments',
                Component:Appointments
            },
            {
                path:'/settings',
                Component:Settings
            },
        
        ]
    },
    
])