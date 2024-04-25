import React from 'react'
import "./sidebar.css"
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import HomeIcon from '@mui/icons-material/Home';
import PermIdentity from '@mui/icons-material/PermIdentity';
import Storefront from '@mui/icons-material/Storefront';
import AttachMoney from '@mui/icons-material/AttachMoney';
import BarChart from '@mui/icons-material/BarChart';
import MailOutline from '@mui/icons-material/MailOutline';
import DynamicFeed from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Report from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';


export default function SideBar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className='sidebarList'>
              <Link to={'/'} className='link'>
                <li className='sidebarListItem active'>
                    
                    <HomeIcon className='sidebarIcon'/>
                    
                    Home
                </li>
                </Link>
                <li className='sidebarListItem'>
                    <TrendingUpIcon/>
                    Analysis
                </li>
                <li className='sidebarListItem'>
                    <TimelineIcon/>
                    Sales
                </li>
            </ul>

            
        </div>

         <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
           
          <Link to={'/users'} className='link'>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
              </Link>
           <Link to={'/products'} className='link'>
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
              </Link>  
              
            

            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
