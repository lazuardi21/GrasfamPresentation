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

  let companyProfileContent = [
    {
      titleAbout: "About Nihongo",
      contentAbout: "は、幅広い IT サービスと製品を専門とする、大手テクノロジー ソリューション プロバイダーです。",
      contentImgAbout:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvvhjxagOlIynO6C2WUPD8Kho3pnyxmwmUtPObacRZ9Q&s",
      productTitle: "Our Product",
      missionTitle: "Our Mission",
      missionContent: "Our mission is to provide comprehensive and innovative IT services that enhance business efficiency, productivity, and competitiveness. We are committed to delivering tailor-made solutions that align with our clients' unique needs and goals.",
      offerTitle: "What we offer",
      offerSubTitle: "IT Service",
      offerContent: "What we offer",
    },
  ]

  return (
    <div className={`${profileClasses}`}>
      <div className="w-90 ml-5 mr-5 mb-2 sm:p-6 p-2">
        <div>
          {companyProfileContent.map((company, i) => {
            return (
              <>
                <div>
                  <h1>{company.titleAbout}</h1>
                  <div className="text-justify pb-10">
                    <p>
                      {company.contentAbout}
                    </p>
                  </div>
                </div>
                <div>
                <h1>{company.missionTitle}</h1>
                  <div className="text-justify pb-10">
                    <p>
                      {company.missionContent}
                    </p>
                  </div>
                </div>
                <div>
                  <h1>{company.productTitle}</h1>
                  <JobList />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(CompanyProfile);
