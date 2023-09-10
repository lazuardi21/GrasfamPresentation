// src/components/CompanyProfile.jsx
import React from 'react';
import { connect } from 'react-redux'; // Import connect
import { darkModeClasses, lightModeClasses } from '../ContentStyles.js'; // Import the classes


// Map state from Redux store to component props
const mapStateToProps = (state) => ({
  isDarkMode: state.app.isDarkMode,
});

function CompanyProfile(props) {
  const { isDarkMode } = props;

  // Apply the appropriate classes based on the current mode
  const profileClasses = isDarkMode ? darkModeClasses : lightModeClasses;

  return (
    <div className={`pt-10 ${profileClasses}`}>
      {/* Company Profile Content */}
      <h1>About Grasfam</h1>
      <div className="text-justify px-8">

        <p>
          <span className="ml-4">Grasfam </span>
          is a leading technology solutions provider, specializing in a wide range of IT services and products.
          Mission: Empowering businesses with innovative technology solutions to thrive in the digital age.
          Grasfam is a leading technology solutions provider, specializing in a wide range of IT services and products. We are committed to helping businesses of all sizes leverage cutting-edge technology to enhance their operations, increase efficiency, and achieve their business goals.
          Our Services
          Custom Software Development: We create tailor-made software solutions that address your specific business needs. Our team of experienced developers uses the latest technologies to build robust and scalable software applications.

          Web Development: Whether you need a website, web application, or e-commerce platform, Grasfam can design, develop, and maintain it for you. Our websites are user-friendly, responsive, and optimized for search engines.

          Mobile App Development: We specialize in developing mobile apps for iOS and Android platforms. From concept to deployment, we ensure your app is user-friendly and provides a seamless user experience.

          IT Consulting: Our experienced consultants can provide expert guidance on IT strategy, infrastructure, security, and digital transformation. We help you make informed decisions to drive your business forward.

          Our Team
          At Grasfam, we have a dedicated team of highly skilled professionals who are passionate about technology. Our team includes software developers, web designers, mobile app developers, IT consultants, and project managers. We collaborate closely with our clients to understand their needs and deliver solutions that exceed their expectations.

          Contact Information
          Address: 123 Tech Avenue, Cityville, State 12345, USA

          Phone: +1 (123) 456-7890

          Email: info@grasfam.com

          Website: www.grasfam.com

          Grasfam is a leading technology solutions provider, specializing in a wide range of IT services and products.
          Mission: Empowering businesses with innovative technology solutions to thrive in the digital age.
          Grasfam is a leading technology solutions provider, specializing in a wide range of IT services and products. We are committed to helping businesses of all sizes leverage cutting-edge technology to enhance their operations, increase efficiency, and achieve their business goals.
          Our Services
          Custom Software Development: We create tailor-made software solutions that address your specific business needs. Our team of experienced developers uses the latest technologies to build robust and scalable software applications.

          Web Development: Whether you need a website, web application, or e-commerce platform, Grasfam can design, develop, and maintain it for you. Our websites are user-friendly, responsive, and optimized for search engines.

          Mobile App Development: We specialize in developing mobile apps for iOS and Android platforms. From concept to deployment, we ensure your app is user-friendly and provides a seamless user experience.

          IT Consulting: Our experienced consultants can provide expert guidance on IT strategy, infrastructure, security, and digital transformation. We help you make informed decisions to drive your business forward.

          Our Team
          At Grasfam, we have a dedicated team of highly skilled professionals who are passionate about technology. Our team includes software developers, web designers, mobile app developers, IT consultants, and project managers. We collaborate closely with our clients to understand their needs and deliver solutions that exceed their expectations.

          Contact Information
          Address: 123 Tech Avenue, Cityville, State 12345, USA

          Phone: +1 (123) 456-7890

          Email: info@grasfam.com

          Website: www.grasfam.com
          Grasfam is a leading technology solutions provider, specializing in a wide range of IT services and products.
          Mission: Empowering businesses with innovative technology solutions to thrive in the digital age.
          Grasfam is a leading technology solutions provider, specializing in a wide range of IT services and products. We are committed to helping businesses of all sizes leverage cutting-edge technology to enhance their operations, increase efficiency, and achieve their business goals.
          Our Services
          Custom Software Development: We create tailor-made software solutions that address your specific business needs. Our team of experienced developers uses the latest technologies to build robust and scalable software applications.

          Web Development: Whether you need a website, web application, or e-commerce platform, Grasfam can design, develop, and maintain it for you. Our websites are user-friendly, responsive, and optimized for search engines.

          Mobile App Development: We specialize in developing mobile apps for iOS and Android platforms. From concept to deployment, we ensure your app is user-friendly and provides a seamless user experience.

          IT Consulting: Our experienced consultants can provide expert guidance on IT strategy, infrastructure, security, and digital transformation. We help you make informed decisions to drive your business forward.

          Our Team
          At Grasfam, we have a dedicated team of highly skilled professionals who are passionate about technology. Our team includes software developers, web designers, mobile app developers, IT consultants, and project managers. We collaborate closely with our clients to understand their needs and deliver solutions that exceed their expectations.

          Contact Information
          Address: 123 Tech Avenue, Cityville, State 12345, USA

          Phone: +1 (123) 456-7890

          Email: info@grasfam.com

          Website: www.grasfam.com
        </p>

      </div>
      {/* Add more content here */}

    </div>
  );
}

export default connect(mapStateToProps)(CompanyProfile);
