import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AppContext from "./context/AppContext";
import WelcomePage from './pages/WelcomePage';
import AllProjectsPage from './pages/AllProjectsPage';
import TipsAndFeaturesPage from './pages/TipsAndFeaturesPage';
import SavedChatsPage from './pages/SavedChatsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateProjectModal from './components/CreateProjectModal';
import {AiOutlineStar} from "react-icons/ai";
import {RiQuestionnaireLine} from "react-icons/ri";

import { useState } from 'react';

function App() {
  const [isCreateProjectModalOpen, setIsCreateProjectModalOpen] = useState(false)
  const [currentMessages, setCurrentMessages] = useState([
    {
      fromSelf: false,
      msg: "Welcome to scholard"
    }
  ]);
  return (
    <div className="App">
      <AppContext.Provider value={{
        setIsCreateProjectModalOpen,
        currentMessages, 
        setCurrentMessages
      }}>
        {isCreateProjectModalOpen &&
          <CreateProjectModal></CreateProjectModal>
       }
       <div className="utility-buttons">
        <button className="question">
          <RiQuestionnaireLine></RiQuestionnaireLine>
        </button>
        <button className="upload">
          <AiOutlineStar></AiOutlineStar>
        </button>
       </div>
        <Router>
          <Routes>
            <Route path='/scholard-frontend-1.0'
              element={<WelcomePage></WelcomePage>}
            ></Route>
           
            <Route path={"/saved-chats"}
              element={<SavedChatsPage></SavedChatsPage>}
            ></Route>
           
            {/* <Route path={"/tips-and-faetures"}
              element={<TipsAndFeaturesPage></TipsAndFeaturesPage>}
            ></Route>
           
            <Route path={"/all-projects"}
              element={<AllProjectsPage></AllProjectsPage>}
            ></Route>

            <Route path="/settings"
              element={<SettingsPage></SettingsPage>}
            ></Route> */}

            <Route path={"*"}
              element={<NotFoundPage></NotFoundPage>}
            ></Route>
           
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
