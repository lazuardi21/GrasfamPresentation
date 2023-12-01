import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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

  const navigation = useNavigate();
  // State to track the current mode (true for dark mode, false for light mode)
  // const [isDarkMode, setIsDarkMode] = useState(false); // Start with light mode as the initial state

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setServicesDropdownOpen(false);
    navigation(path);
  };

  const { isDarkMode, toggleDarkMode } = props;

  const toggleMode = () => {
    toggleDarkMode();
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // State to track the currently active link
  const [activeLink, setActiveLink] = useState(null);

  // State to manage the visibility of the sidebar
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // State to track the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
  const navbarBackgroundColor = isDarkMode ? 'bg-slate-800' : 'bg-slate-400';
  const navbarTextColor = isDarkMode ? 'text-black' : 'text-white'; // Inverted text color
  const navbarLayoutClasses = windowWidth < 1080 ? 'flex-col' : 'flex-row';

  // Conditionally apply a CSS className to the grid icon for color change in light mode
  const gridIconColor = isDarkMode ? 'text-white' : 'text-black';

  const navbarClasses = `fixed w-full top-0 left-0 ${navbarBackgroundColor} ${navbarTextColor} flex justify-between items-center ${navbarLayoutClasses}`;
  const buttonClasses = `ml-2 px-3 py-1 rounded ${isDarkMode ? 'bg-green-500' : 'bg-yellow-400'
    } hover:bg-${isDarkMode ? 'green-600' : 'yellow-500'}`;

  // Custom CSS className for link spacing
  const linkSpacing = 'mr-0';

  // Custom CSS className for link text styles
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
          <div className="justify-between items-center">
            <div className={windowWidth < 1080 ? "flex justify-center" : "items-center"}>
              {windowWidth < 1080 ? (
                // <div className='flex justify-center'>
                // Render the grid icon for mobile view
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl cursor-pointer ${gridIconColor} p-2`}
                  onClick={toggleSidebar}
                />
                // </div>
              ) : null}
              {sidebarVisible && windowWidth < 1080 ? (
                // Render the links in the sidebar for mobile view when sidebarVisible is true
                <div className={isDarkMode ? "absolute left-0 w-full bg-slate-700 z-10 text-center" : "absolute top-16 left-0 w-full bg-slate-500 z-10"}
                  style={{ top: '2.5rem' }} >
                  <div 
                  className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                  onClick={() => { handleLinkClick('/'); setActiveLink('Grasfam'); setSidebarVisible(false);}}
                  >
                    {activeLink === 'Grasfam' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Grasfam
                        </span>
                      ) : (
                        'Grasfam'
                      )}
                  </div>
                  <div>
                    <div
                      onClick={toggleDropdown}
                      className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'
                        } cursor-pointer`}
                    >
                     Services
                      {showDropdown ? (
                        <FontAwesomeIcon icon={faAngleUp} className="ml-2" />
                      ) : (
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                      )}
                      {showDropdown && (
                        <div className="ml-4">
                          <div
                          className={`text-2xl ${linkTextStyles} rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                          onClick={() => { handleLinkClick('/services/ai'); setActiveLink('Services'); setSidebarVisible(false);}}
                          >
                            AI
                          </div>
                          <div
                          className={`text-2xl ${linkTextStyles} rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                          onClick={() => { handleLinkClick('/services/tools'); setActiveLink('Services'); setSidebarVisible(false);}}
                          >
                            Tools
                          </div>
                          <div
                          className={`text-2xl ${linkTextStyles} rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                          onClick={() => { handleLinkClick('/services/education'); setActiveLink('Services'); setSidebarVisible(false);}}
                          >
                            Education
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                  className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                  onClick={() => { handleLinkClick('/contact'); setActiveLink('Contact'); setSidebarVisible(false);}}
                  >
                    {activeLink === 'Contact' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Contact
                        </span>
                      ) : (
                        'Contact'
                      )}
                    
                  </div>
                  <div
                   className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                   onClick={() => { handleLinkClick('/projects'); setActiveLink('Projects'); setSidebarVisible(false);}}
                  > 
                     {activeLink === 'Projects' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Projects
                        </span>
                      ) : (
                        'Projects'
                      )}
                  </div>
                  <div
                  className={`text-2xl ${linkTextStyles} p-2 rounded ${isDarkMode ? null : 'bg-brown-200'}`}
                  onClick={() => { handleLinkClick('/clients'); setActiveLink('Clients'); setSidebarVisible(false);}}
                  >
                    {activeLink === 'Clients' ? (
                        <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>
                          Clients
                        </span>
                      ) : (
                        'Clients'
                      )}
                  </div>
                </div>
              ) : windowWidth > 1080 ? (
                // Render the links for desktop view or when sidebarVisible is false
                <div className="grid grid-cols-[7%_8%_7%_7%_7%_10%_10%_14%] gap-2 items-center left-4 pl-24">
                  <div
                    className={`cursor-pointer  row-span-1 sm:w-full p-2 ${linkTextStyles}`}
                    onClick={() => { handleLinkClick('/'); setActiveLink('Grasfam'); }}
                  >
                    {activeLink === 'Grasfam' ? (
                      <span className={`${isDarkMode ? 'text-green-500' : 'text-blue-500'}`}>Grasfam</span>
                    ) : (
                      'Grasfam'
                    )}
                  </div>
                  <div
                    className={`cursor-pointer p-2 ${servicesDropdownOpen ? isDarkMode ? 'text-white' : 'text-black' : linkTextStyles
                      }`}
                    // onClick={() => {
                    //   setActiveLink('Services');
                    //   setServicesDropdownOpen(!servicesDropdownOpen)
                    // }}
                    onMouseEnter={() => { setServicesDropdownOpen(true); }}
                    onMouseLeave={() => setServicesDropdownOpen(false)} // Close dropdown on hover leave

                  // onMouseOver={setServicesDropdownOpen(!servicesDropdownOpen)}
                  >
                    <span
                      className={`row-span-1 sm:w-full ${activeLink === 'Services' ? (isDarkMode ? 'text-green-500' : 'text-blue-500') : ''}`}
                    // className={`cursor-pointer ${activeLink === 'Services' ? (isDarkMode ? 'text-green-500' : 'text-blue-500') : ''}`}
                    // onClick={() => handleLinkClick('/services')}
                    >
                      Services
                      {servicesDropdownOpen ? (
                        <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
                      ) : (
                        <FontAwesomeIcon icon={faAngleUp} className="ml-2" />
                      )}
                    </span>
                    {servicesDropdownOpen && (
                      <div className={`absolute left-23 w-30 ${isDarkMode ? 'bg-slate-800' : 'bg-white bg-opacity-99'}  shadow-lg rounded`}>
                        <div
                          className={`block px-4 py-2 ${isDarkMode ? 'text-white' : 'text-black'} ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}  rounded`}
                          onClick={() => { handleLinkClick('/services/ai'); setActiveLink('Services'); }}
                        >
                          AI
                        </div>
                        <div
                          className={`block px-4 py-2 ${isDarkMode ? 'text-white' : 'text-black'} ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}  rounded`}
                          onClick={() => { handleLinkClick('/services/tools'); setActiveLink('Services'); }}
                        >
                          Tools
                        </div>
                        <div
                          className={`block px-4 py-2 ${isDarkMode ? 'text-white' : 'text-black'} ${isDarkMode ? 'hover:bg-slate-600' : 'hover:bg-gray-200'}  rounded`}
                          onClick={() => { handleLinkClick('/services/education'); setActiveLink('Services'); }}
                        >
                          Education
                        </div>
                      </div>
                    )}
                  </div>
                  <div
                    className={`cursor-pointer row-span-1 sm:w-full p-2  ${linkTextStyles}`}
                    onClick={() => { handleLinkClick('/contact'); setActiveLink('Contact'); }}
                  >
                    {activeLink === 'Contact' ? (
                      <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>Contact</span>
                    ) : (
                      'Contact'
                    )}
                  </div>
                  <div
                    className={`cursor-pointer row-span-1 sm:w-full p-2 ${linkTextStyles}`}
                    onClick={() => { handleLinkClick('/projects'); setActiveLink('Projects'); }}
                  >
                    {activeLink === 'Projects' ? (
                      <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>Projects</span>
                    ) : (
                      'Projects'
                    )}
                  </div>
                  <div
                    className={`cursor-pointer row-span-1 sm:w-full p-2 ${linkTextStyles}`}
                    onClick={() => { handleLinkClick('/clients'); setActiveLink('Clients'); }}
                  >
                    {activeLink === 'Clients' ? (
                      <span className={isDarkMode ? 'text-green-500' : 'text-blue-500'}>Clients</span>
                    ) : (
                      'Clients'
                    )}
                  </div>
                </div>

              ) : null}
            </div>
            <div className="fixed top-0 right-0" style={{ paddingTop: windowWidth < 1080 ? '0.5%' : '0.2%' }}>
              <button className={`${buttonClasses} ${windowWidth < 1080 ? 'mr-1' : 'mr-3'}`} onClick={toggleMode}>
                {windowWidth < 1080 ? (
                  isDarkMode ? (
                    <>
                      <FontAwesomeIcon icon={faLightbulb} /></>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faLightbulb} /></>
                  )
                ) : (
                  isDarkMode ? (
                    <>
                      <FontAwesomeIcon icon={faLightbulb} className="mr-1" /> Dark Mode
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faLightbulb} className="mr-1" /> Light Mode
                    </>
                  )
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
