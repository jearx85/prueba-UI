import './HomePage.css';
import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar';
import RightView from '../components/Rightview/RightView';
import MainContent from '../components/MainContent/MainContent';
import Sidebar from '../components/sideBar/SideBar';



function HomePage() {
  const [isRightViewVisible, setIsRightViewVisible] = useState(true);
  const [isLeftMenuVisible, setIsLeftMenuVisible] = useState(true);
  const [isLeftViewVisible, setIsLeftViewVisible] = useState(true);
//   const [leftViewWidth, setLeftViewWidth] = useState(80);

  const toggleRightView = () => {
    setIsRightViewVisible(!isRightViewVisible);
  };

  const toggleLeftMenu = () => {
    setIsLeftMenuVisible(!isLeftMenuVisible);
  };

  const toggleLeftView = () => {
    setIsLeftViewVisible(!isLeftViewVisible);
  };

//   const handleResize = (newWidth) => {
//     setLeftViewWidth(newWidth);
//   };



  let mainContentClasses = 'col p-0';

  if (!isLeftMenuVisible) {
    mainContentClasses += ' ml-5';
  }

  const leftViewRef = React.createRef();
  const [resizing, setResizing] = useState(false);

  return (
    <div className="HomePage">
        <div className="row">
          <NavBar />
        </div>

        <div className="row">
          <div className="col-2 p-0" style={{ width: isLeftViewVisible }}
              onClick={toggleLeftMenu}
              >
                <Sidebar/>
          </div>

          {isLeftMenuVisible && (
            <div className="col-3 p-0">
              <div className='leftView'>
                {isLeftViewVisible && <h1>leftView</h1>}
              </div>
            </div>
          )}
        
          <div className={mainContentClasses}>
            <div className='mainContent'>
              <MainContent toggleRightView={toggleRightView}/>
            </div>
          </div>

          {isRightViewVisible && (
            <div className="col-2 p-0">
              <div className='rightView'>
                <RightView />
              </div>
            </div>
          )}
        </div>
    </div>
  );
}

export default HomePage;
