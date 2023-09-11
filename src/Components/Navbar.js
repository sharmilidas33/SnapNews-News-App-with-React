import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

  render() {
    const { darkMode } = this.props;
    return (
      <>
      <div>
        <nav className={`navbar navbar-expand-lg custom-navbar ${darkMode ? 'bg-dark' : ''}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand ${darkMode ? 'text-white' : ''}`} to="/">SnapNews </Link>
                <button className={`navbar-toggler ${darkMode ? 'text-white' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className={`navbar-toggler-icon`} ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link dark-mode-link" to="/technology">Technology</Link>
                    </li>
                </ul>
                <div className={`form-check form-switch ${darkMode ? 'text-white' : ''}`}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleDarkMode}/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Change mode</label>
                </div>
                </div>
            </div>
          </nav>
      </div>
      </>
    )
  }
}

export default Navbar
