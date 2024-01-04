import React from 'react';
import './MainContent.css';
import { AiOutlineRobot } from "react-icons/ai";

export default function MainContent({toggleRightView}) {
  return (
    <div>
      <div className="mainContentHeader">
          <div className="openRigthViewIcon" onClick={toggleRightView} draggable="true">
            {/* <button className="btn btn-outline-success" type="button" onClick={toggleRightView}>Search</button> */}
            <AiOutlineRobot style={{ fontSize: '60px' }}/>
          </div>
      </div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Home</a></li>
          <li className="breadcrumb-item"><a href="/">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <div className="card mb-3">
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div className="card text-center mb-3">
        <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>

        <div class="card text-end">
        <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}
