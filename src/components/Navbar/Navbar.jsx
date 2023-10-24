import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faBars } from '@fortawesome/free-solid-svg-icons';
import { toggleDarkMode } from '../../store/Actions'; // Import the toggleDarkMode action
import { connect } from 'react-redux';
// import appReducer  from '../../store/Reducers'; // Make sure the import path is correct
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';


const mapStateToProps = (state) => ({
  isDarkMode: state.app.isDarkMode,
});

const mapDispatchToProps = {
  toggleDarkMode,
};

function Navbar(props) {

  // State to track the current mode (true for dark mode, false for light mode)
  // const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode as the initial state

  const { isDarkMode, toggleDarkMode } = props;

  const toggleMode = () => {
    toggleDarkMode();
  };

  // State to track the currently active link
  const [activeLink, setActiveLink] = useState(null);

  // State to manage the visibility of the sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // State to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to toggle between dark mode and light mode
  // const toggleMode = () => {
  //   setIsDarkMode(!isDarkMode);
  //   // You can save the user's preference in local storage or cookies for persistence
  //   // Example: localStorage.setItem('darkMode', !isDarkMode);
  // };

  // Function to update window width state
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // Define CSS classes for navbar based on the current mode and screen width
  const navbarBackgroundColor = isDarkMode ? 'bg-slate-800' : 'bg-slate-600 bg-opacity-99';
  const navbarTextColor = isDarkMode ? 'text-black' : 'text-white'; // Inverted text color
  const navbarLayoutClasses = windowWidth < 1080 ? 'flex-col' : 'flex-row';

  // Conditionally apply a CSS class to the grid icon for color change in light mode
  const gridIconColor = isDarkMode ? 'text-white' : 'text-black';

  const navbarClasses = `fixed w-full top-0 left-0 ${navbarBackgroundColor} ${navbarTextColor} flex justify-between items-center ${navbarLayoutClasses}`;
  const buttonClasses = `ml-2 px-3 py-1 rounded ${isDarkMode ? 'bg-green-500' : 'bg-yellow-400'
    } hover:bg-${isDarkMode ? 'green-600' : 'yellow-500'}`;

  // Custom CSS class for link spacing
  const linkSpacing = 'mr-0';

  // Custom CSS class for link text styles
  const linkTextStyles = `text-${isDarkMode ? 'white' : 'black'} hover:underline`;

  // Define CSS classes for active links with different background colors based on the mode
  const activeLinkDarkMode = 'bg-gray-500';
  const activeLinkLightMode = 'bg-brown-500';

  // Inside the Navbar component, add a new state variable for tracking the dropdown state
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);


  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto">
        <div>
          <div className="left-4 pl-24 justify-between items-center">
            <div className="items-center">
              {windowWidth < 1080 ? (
                // Render the grid icon for mobile view
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl mr-4 cursor-pointer ${gridIconColor}`}
                  onClick={toggleSidebar}
                />
              ) : null}
              {sidebarVisible && windowWidth < 1080 ? (
                // Render the links in the sidebar for mobile view when sidebarVisible is true
                <div className={isDarkMode ? "absolute top-16 left-0 w-full bg-slate-700 z-10 text-left" : "absolute top-16 left-0 w-full bg-slate-500 z-10"}>
                  <div > {/* Add text-left class */}
                    <NavLink
                      to="/"
                      exact
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'
                        }`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={() => {
                        setActiveLink('Grasfam');
                        setSidebarVisible(false); // Hide sidebar when a link is clicked
                      }}
                    >
                      {activeLink === 'Grasfam' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Grasfam
                        </span>
                      ) : (
                        'Grasfam'
                      )}
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/services"
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'
                        }`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={() => {
                        setActiveLink('Services');
                        setSidebarVisible(false); // Hide sidebar when a link is clicked
                      }}
                    >
                      {activeLink === 'Services' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Services
                        </span>
                      ) : (
                        'Services'
                      )}
                    </NavLink>
                  </div>
                  <div> {/* Add text-left class */}
                    <NavLink
                      to="/contact"
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={() => {
                        setActiveLink('Contact');
                        setSidebarVisible(false); // Hide sidebar when a link is clicked
                      }}
                    >
                      {activeLink === 'Contact' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Contact
                        </span>
                      ) : (
                        'Contact'
                      )}
                    </NavLink>
                  </div>
                  <div> {/* Add text-left class */}
                    {/* Add links to Projects and Clients */}
                    <NavLink
                      to="/projects"
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Projects')
                          setSidebarVisible(false); // Hide sidebar when a link is clicked
                        }}
                    >
                      {activeLink === 'Projects' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Projects
                        </span>
                      ) : (
                        'Projects'
                      )}
                    </NavLink>
                  </div>
                  <div> {/* Add text-left class */}
                    <NavLink
                      to="/clients"
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Clients')
                          setSidebarVisible(false); // Hide sidebar when a link is clicked
                        }}
                    >
                      {activeLink === 'Clients' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Clients
                        </span>
                      ) : (
                        'Clients'
                      )}
                    </NavLink>
                  </div>
                </div>
              ) : windowWidth > 1080 ? (
                // Render the links for desktop view or when sidebarVisible is false
                <div className="grid grid-cols-[7%_8%_7%_7%_7%_10%_10%_14%] gap-2 items-center">
                  <div className={`row-span-1 sm:w-full p-2 ${isDarkMode ? null : 'bg-white'} ${linkTextStyles}`}>
                    <NavLink
                      to="/"
                      exact
                      className={`text-lg ${linkTextStyles} ${linkSpacing}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Grasfam');
                          servicesDropdownOpen ? setServicesDropdownOpen(!servicesDropdownOpen) : null; // Hide Dropdown when a link is clicked
                      }}
                    >
                      {activeLink === 'Grasfam' ? (
                        <span className={`${isDarkMode ? 'text-green-500' : 'text-blue-500'}`}>
                          Grasfam
                        </span>
                      ) : (
                        'Grasfam'
                      )}
                    </NavLink>

                  </div>
                  <div className={`row-span-1 sm:w-full text-lg p-2 ${isDarkMode ? null : 'bg-white'} ${servicesDropdownOpen ? 'text-black' : linkTextStyles}`}
                    onClick={() => {
                      setServicesDropdownOpen(!servicesDropdownOpen); // Hide sidebar when a link is clicked
                    }}

                  >
                    <span
                      className={`cursor-pointer ${activeLink === 'Services' ?
                        (isDarkMode ? 'text-green-500' : 'text-blue-500') : ''}`}
                      onClick={() => {
                        setActiveLink('Services');
                        // setSidebarVisible(false); // Hide sidebar when a link is clicked
                        // setServicesDropdownOpen(!servicesDropdownOpen); // Toggle the dropdown state
                      }}
                    >
                      Services
                      {servicesDropdownOpen ? (
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2" /> // Up arrow icon when open
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} className="ml-2" /> // Down arrow icon when closed
                      )}
                    </span>
                    {activeLink === 'Services' && servicesDropdownOpen && (
                      <div className="absolute left-23 mt-6 w-30 bg-white shadow-lg rounded">
                        <NavLink
                          to="/services/ai"
                          className="block px-4 py-2 text-black hover:bg-gray-200 rounded"
                          onClick={() => {
                            setServicesDropdownOpen(!servicesDropdownOpen); // Hide sidebar when a link is clicked
                          }}
                        >
                          AI
                        </NavLink>
                        <NavLink
                          to="/services/tools"
                          className="block px-4 py-2 text-black hover:bg-gray-200"
                          onClick={() => {
                            setServicesDropdownOpen(!servicesDropdownOpen); // Hide sidebar when a link is clicked
                          }}
                        >
                          Tools
                        </NavLink>
                        <NavLink
                          to="/services/education"
                          className="block px-4 py-2 text-black hover:bg-gray-200 rounded"
                          onClick={() => {
                            setServicesDropdownOpen(!servicesDropdownOpen); // Hide sidebar when a link is clicked
                          }}
                        >
                          Education
                        </NavLink>
                      </div>
                    )}
                  </div>
                  <div className={`row-span-1 sm:w-full p-2  ${isDarkMode ? null : 'bg-white'} ${linkTextStyles}`}>
                    <NavLink
                      to="/contact"
                      className={`text-lg ${linkTextStyles} ${linkSpacing}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Contact');
                          servicesDropdownOpen ? setServicesDropdownOpen(!servicesDropdownOpen) : null; // Hide Dropdown when a link is clicked
                      }}
                    >
                      {activeLink === 'Contact' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Contact
                        </span>
                      ) : (
                        'Contact'
                      )}
                    </NavLink>
                  </div>
                  {/* Add links to Projects and Clients */}
                  <div className={`row-span-1 sm:w-full p-2  ${isDarkMode ? null : 'bg-white'} ${linkTextStyles}`}>
                    <NavLink
                      to="/projects"
                      className={`text-lg ${linkTextStyles} ${linkSpacing}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Projects');
                          servicesDropdownOpen ? setServicesDropdownOpen(!servicesDropdownOpen) : null; // Hide Dropdown when a link is clicked
                      }}
                    >
                      {activeLink === 'Projects' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Projects
                        </span>
                      ) : (
                        'Projects'
                      )}
                    </NavLink>
                  </div>
                  <div className={`row-span-1 sm:w-full p-2  ${isDarkMode ? null : 'bg-white'} ${linkTextStyles}`}>
                    <NavLink
                      to="/clients"
                      className={`text-lg ${linkTextStyles} ${linkSpacing}`}
                      activeClassName={isDarkMode ? activeLinkDarkMode : activeLinkLightMode}
                      onClick={
                        () => {
                          setActiveLink('Clients');
                          servicesDropdownOpen ? setServicesDropdownOpen(!servicesDropdownOpen) : null; // Hide Dropdown when a link is clicked
                      }}
                    >
                      {activeLink === 'Clients' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Clients
                        </span>
                      ) : (
                        'Clients'
                      )}
                    </NavLink>
                  </div>
                </div>
              ) : null}
            </div>
            <div class="fixed top-0 right-0 p-1">
              <button className={buttonClasses} onClick={toggleMode}>
                {isDarkMode ? (
                  <>
                    <FontAwesomeIcon icon={faLightbulb} className="mr-1" /> Dark Mode
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLightbulb} className="mr-1" /> Light Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
