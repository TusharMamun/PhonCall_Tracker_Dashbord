import { CiCalendar, CiCalendarDate, CiCircleAlert } from "react-icons/ci";
import { FaCalendarCheck, FaClock, FaExchangeAlt, FaPhone, FaPhoneAlt, FaRobot, FaTimes } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import calenderimg from '../assets/calender.png'
import clockImg from '../assets/Clock.png'
import Arrowimg from '../assets/Arrowimg.png'
import phonImg from '../assets/Phon.png'
import croosimg from '../assets/Cross.png'
import Aibort from '../assets/AiBot.png'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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
    change: "+8%",
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

  export const chartData = [
    { day: 'Mon', value: 100 },
    { day: 'Tue', value: 75 },
    { day: 'Wed', value: 50 },
    { day: 'Thu', value: 25 },
    { day: 'Fri', value: 60 },
    { day: 'Sat', value: 80 },
    { day: 'Sun', value: 40 }
  ];

  export const activities = [
  {
    id: 1,
    text: "Al booked appointment for iPhone 13 screen repair",
    timestamp: "2 min ago",
color: "green",

  },
  {
    id: 2,
    text: "Warm transfer to technician - Software issue",
    timestamp: "5 min ago",
     color: "yellow"
  },
  {
    id: 3,
    text: "Quote provided for iPad battery replacement",
    timestamp: "8 min ago",
    color: "green",
  },
  {
    id: 4,
    text: "Call dropped after 12 seconds",
    timestamp: "15 min ago",
    color: "red",
  }
];


// reuest age
 export  const repairData = [
    { name: 'Screen Repair', requests: 156, total: 200 },
    { name: 'Battery Replacement', requests: 89, total: 200 },
    { name: 'Back Glass Repair', requests: 67, total: 200 },
    { name: 'Software Issues', requests: 45, total: 200 },
  ];


  export const callActivities = [
  {
    id: 1,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    timestamp: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    duration: "5:23",
    action: "Quote Provided",
    issueType: "Screen"
  },
  {
    id: 2,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    timestamp: "2025-12-16 • 09:42 AM",
    status: "Warm Transfer",
    duration: "5:23",
    action: "Escalated to technician",
    issueType: "Software"
  },
  {
    id: 3,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    timestamp: "2025-12-16 • 09:42 AM",
    status: "Appointment",
    duration: "5:23",
    action: "Appointment Booked",
    issueType: "Battery"
  },
  {
    id: 4,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    timestamp: "2025-12-16 • 09:42 AM",
    status: "Dropped",
    duration: "0:20",
    action: "Call Dropped",
    issueType: "Unknown"
  },
  {
    id: 5,
    phoneNumber: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    timestamp: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    duration: "5:23",
    action: "Quote Provided",
    issueType: "Screen"
  }
];

// Or as a React component data:
export const callActivitiesData = [
  {
    id: 1,
    phone: "+1 (555) 345-6789",
    datetime: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    duration: "5:23",
    description: "Quote Provided",
    category: "Screen"
  },
  {
    id: 2,
    phone: "+1 (555) 345-6789",
    datetime: "2025-12-16 • 09:42 AM",
    status: "Warm Transfer",
    duration: "5:23",
    description: "Escalated to technician",
    category: "Software"
  },
  {
    id: 3,
    phone: "+1 (555) 345-6789",
    datetime: "2025-12-16 • 09:42 AM",
    status: "Appointment",
    duration: "5:23",
    description: "Appointment Booked",
    category: "Battery"
  },
  {
    id: 4,
    phone: "+1 (555) 345-6789",
    datetime: "2025-12-16 • 09:42 AM",
    status: "Dropped",
    duration: "0:20",
    description: "Call Dropped",
    category: "Unknown"
  },
  {
    id: 5,
    phone: "+1 (555) 345-6789",
    datetime: "2025-12-16 • 09:42 AM",
    status: "AI Resolved",
    duration: "5:23",
    description: "Quote Provided",
    category: "Screen"
  }
];

export const bookingStats = [
  {
    id: 1,
    title: "Total Booked",
    value: 34,
    subText: "+8 this week",
    status: "positive",
    icon: <CiCalendarDate className="text-blue-400 w-5 h-5"/>, 
  },
  {
    id: 2,
    title: "AI Booked",
    value: 28,
    subText: "82% of total",
    status: "success",
    icon: <IoMdCheckmarkCircleOutline   className="text-green-400 w-5 h-5"/>, 
  },
  {
    id: 3,
    title: "Pending",
    value: 3,
    subText: "Awaiting confirmation",
    status: "warning",
    icon: <CiCircleAlert   className="text-yellow-400 w-5 h-5"/>, 
  },
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