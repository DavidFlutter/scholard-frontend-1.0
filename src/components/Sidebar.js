import React from 'react'
import {BiEditAlt, BiLogOut} from "react-icons/bi";
import {RiQuestionnaireLine} from "react-icons/ri";
import {AiOutlineFolder, AiOutlineHome, AiOutlineStar, AiOutlineFolderAdd} from "react-icons/ai";
import {BsSave} from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { useContext } from 'react';


const Sidebar = () => {

    const {setIsCreateProjectModalOpen} = useContext(AppContext);
    const handleOpenCreateProjectModal = () => {
        setIsCreateProjectModalOpen(true);
    }
  return (
    <div className='Sidebar'>
        <div className="head">
            <div className="user-image">
                <img src="" alt="" />
            </div>
            <div className="user-details">
                <span className='name'> John Doe</span>
                <span className='email'> John.Doe@gmail.com</span>
                <NavLink className='acct-settings-link'
                    to={"/scholard-frontend-1.0/settings"}
                >
                    account settings
                </NavLink>
            </div>
        </div>

        <button className="new-project-btn"
            onClick={() => handleOpenCreateProjectModal()}
        >
            <AiOutlineFolderAdd></AiOutlineFolderAdd>
            <span>New project</span>
        </button>
        <nav>
            <NavLink 
                to={"/scholard-frontend-1.0/welcome"}
            >
                <AiOutlineHome></AiOutlineHome>
                <span>Home</span>
            </NavLink>
            <NavLink 
                to={"/scholard-frontend-1.0/saved-chats"}
            >
                <BsSave></BsSave>
                <span>Saved chats</span>
            </NavLink>
            <NavLink 
                to={"/scholard-frontend-1.0/tips-and-faetures"}
            >
                <AiOutlineStar></AiOutlineStar>
                <span>Tips and Features</span>
            </NavLink>
            <NavLink
                to={"/scholard-frontend-1.0/all-projects"}
            >
                <AiOutlineFolder></AiOutlineFolder>
                <span>All projects</span>
            </NavLink>
            <NavLink
                to={"/scholard-frontend-1.0/q"}
            >
                <RiQuestionnaireLine></RiQuestionnaireLine>
                <span>Updates and FAQs</span>
            </NavLink>
            <NavLink
                to={"/scholard-frontend-1.0/c"}
            >
                <BiEditAlt></BiEditAlt>
                <span>Customization</span>
            </NavLink>
        </nav>
        <button className="logout-btn">
            <BiLogOut></BiLogOut>
            <span>Logout</span>
        </button>
    </div>
  )
}

export default Sidebar