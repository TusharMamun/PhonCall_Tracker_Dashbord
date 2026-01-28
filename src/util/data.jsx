import { CiCalendar } from "react-icons/ci";
import { FaCalendarCheck, FaClock, FaExchangeAlt, FaPhone, FaPhoneAlt, FaRobot, FaTimes } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import calenderimg from '../assets/calender.png'
import clockImg from '../assets/Clock.png'
import Arrowimg from '../assets/Arrowimg.png'
import phonImg from '../assets/Phon.png'
import croosimg from '../assets/Cross.png'
import Aibort from '../assets/AiBot.png'

export const sidebarItems = [
  {
    id: 1,
    title: "Dashboard Overview",
    path: "/",
    icon: <MdHome className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"/>,
    active: true
  },
  {
    id: 2,
    title: "Call Logs",
    path: "/call-logs",
    icon: <FaPhoneAlt className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
    active: false
  },
  {
    id: 3,
    title: "Appointments",
    path: "/appointments",
icon: <CiCalendar className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
    active: false
  },
  {
    id: 4,
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />,
    active: false
  }
];





export const dashboardStats = [
  {
    id: 1,
    title: "Total Calls Today",
    value: 27,
    change: "+12%",

    icon: <img src={phonImg} alt="Phone" className="w-12 h-12" />,


  },
  {
    id: 2,
    title: "AI-Handled Calls",
    value: 98,
    change: "+77%",

    icon:  <img src={Aibort} alt="Phone" className="w-12 h-12" />,
  
  },
  {
    id: 3,
    title: "Warm Transfer",
    value: 23,
    change: "+18%",
 
    icon:<img src={Arrowimg} alt="Phone" className="w-12 h-12" />,

  },
  {
    id: 4,
    title: "Appointments Booked",
    value: 34,
    change: "8%",
    icon: <img src={calenderimg} alt="Phone" className="w-12 h-12" />,
   
  },
  {
    id: 5,
    title: "Missed/Failed Calls",
    value: 6,
    change: "-3%",
      icon: <img src={croosimg} alt="Phone" className="w-12 h-12" />,
 
  },
  {
    id: 6,
    title: "Avg Call Duration",
    value: "3:42",
    change: "+15%",
 
    icon: <img src={clockImg} alt="Phone" className="w-12 h-12" />,
  
  }
];
// export const dashboardStats = [
//   {
//     id: 1,
//     title: "Total Calls Today",
//     value: 127,
//     change: "+12%",
//     icon: <FaPhone className="w-12 h-12 text-white bg-blue-500" />,
//     bgColor: "bg-blue-100",
//     dimensions: "374 × 146"
//   },
//   {
//     id: 2,
//     title: "Appointments Booked",
//     value: 34,
//     change: "+8%",
//     icon: <FaCalendarCheck className="w-12 h-12 text-green-600" />,
//     bgColor: "bg-green-100"
//   },
//   {
//     id: 3,
//     title: "AI-Handled Calls",
//     value: 98,
//     change: "+77%",
//     icon: <FaRobot className="w-12 h-12 text-purple-600" />,
//     bgColor: "bg-purple-100"
//   },
//   {
//     id: 4,
//     title: "Missed/Failed Calls",
//     value: 6,
//     change: "-3%",
//     icon: <FaTimes className="w-12 h-12 text-red-600" />,
//     bgColor: "bg-red-100"
//   },
//   {
//     id: 5,
//     title: "Warm Transfer",
//     value: 23,
//     change: "+18%",
//     icon: <FaExchangeAlt className="w-12 h-12 text-orange-600" />,
//     bgColor: "bg-orange-100"
//   },
//   {
//     id: 6,
//     title: "Avg Call Duration",
//     value: "3:42",
//     change: "+15%",
//     icon: <FaClock className="w-12 h-12 text-cyan-600" />,
//     bgColor: "bg-cyan-100"
//   }
// ];