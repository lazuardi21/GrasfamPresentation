// src/components/CompanyProfile.jsx
import React from 'react';
import { connect } from 'react-redux'; // Import connect
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
      <div className="w-90 bg-white border ml-5 mr-5 border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
        {/* <CompanyCard>

        </CompanyCard> */}
        {/* Company Profile Content */}
        <h1>About Company</h1>
        <div className="text-justify">

          <p>
            <span className="ml-4">Grasfam </span>
            is a leading technology solutions provider, specializing in a wide range of IT services and products.

          </p>

        </div>
        {/* Add more content here */}

      </div>

    </div>
  );
}

export default connect(mapStateToProps)(CompanyProfile);
