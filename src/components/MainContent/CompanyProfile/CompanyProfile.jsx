// src/components/CompanyProfile.jsx
import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { companyName } from '../../Utils/Constant';
import { bodyContent } from './Content';
import JobList from "./JobList";
// import CompanyCard from './CompanyCard';

// Map state from Redux store to component props
const mapStateToProps = (state) => ({
  isDarkMode: state.app.isDarkMode,
});

function CompanyProfile(props) {
  const { isDarkMode } = props;

  // Apply the appropriate classes based on the current mode
  const profileClasses = isDarkMode ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <div className={`${profileClasses}`}>
      <div className="w-90 ml-5 mr-5 mb-2 sm:p-6  p-2">
        <div>
          <h1>About {companyName}</h1>
          <div className="text-justify">
            <p>
              {/* <span className="ml-4">Grasfam </span> */}
              {bodyContent}
            </p>
          </div>
          <h1>Our Products</h1>
          <JobList />
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(CompanyProfile);
