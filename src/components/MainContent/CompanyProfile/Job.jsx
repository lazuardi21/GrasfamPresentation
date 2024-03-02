import React from "react";
import JobRight from "./JobRight.jsx";
import JobLeft from "./JobLeft.jsx";
import FadeInSection from "../../Utils/FadeInSection";
// import "./styles/Job.css";

export default function Job() {
  const initialJobs = [
    {
      jobName: "World Chess Hall of Fame",
      emoji: "♔",
      jobTitle: "Project Manager",
      jobLocation: "St. Louis, Missouri",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra. Feugiat in ante metus dictum at tempor commodo. Consectetur lorem donec massa sapien faucibus.",
      jobImg:
        "https://www.kasandbox.org/programming-images/avatars/duskpin-sapling.png"
    },
    {
      jobName: "Selkirk Auctioneers & Appraisers",
      emoji: "🎨",
      jobTitle: "Fine Art Specialist",
      jobLocation: "St. Louis, Missouri",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra. Feugiat in ante metus dictum at tempor commodo. Consectetur lorem donec massa sapien faucibus.",
      jobImg:
        "https://www.kasandbox.org/programming-images/avatars/duskpin-seed.png"
    },
    {
      jobName: "University of York",
      emoji: "🤓",
      jobTitle: "Master’s Degree, History of Art, Medieval Art and Medievalism",
      jobLocation: "York, England",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra. Feugiat in ante metus dictum at tempor commodo. Consectetur lorem donec massa sapien faucibus.",
      jobImg:
        "https://scholarship-positions.com/wp-content/uploads/2018/02/University-of-York-in-UK-1024x683.jpg"
    },
    {
      jobName: "University of Missouri - Columbia",
      emoji: "🎓",
      jobTitle: "Bachelor's Degree, Art History and Archaelogy",
      jobLocation: "Columbia, Missouri",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed augue lacus viverra. Feugiat in ante metus dictum at tempor commodo. Consectetur lorem donec massa sapien faucibus.",
      jobImg:
        "https://diversity.missouri.edu/wp-content/uploads/2018/06/hero-columns-values.jpg"
    },
    {
      jobName: "Digiprint Center",
      emoji: "🖨",
      jobTitle: "Printing Specialist",
      jobLocation: "Columbia, Missouri",
      jobDescription:
        "Processed printing orders and operated large-scale printing and binding equipment. Experience with Microsoft Software.",
      jobImg:
        "https://upload.wikimedia.org/wikipedia/commons/d/da/Ellis_Library.jpg"
    }
  ];
  return (
    <>
      
        {initialJobs.map((job, i) => {
          if (i % 2 === 0) {
            return (
              <FadeInSection key={i}>
                <JobRight
                  style={{ marginBottom: "3rem" }}
                  name={job.jobName}
                  emoji={job.emoji}
                  title={job.jobTitle}
                  location={job.jobLocation}
                  desc={job.jobDescription}
                  img={job.jobImg}
                />
              </FadeInSection>
            );
          } else {
            return (
              <FadeInSection key={i}>
                <JobLeft
                  style={{ marginBottom: "3rem" }}
                  name={job.jobName}
                  emoji={job.emoji}
                  title={job.jobTitle}
                  location={job.jobLocation}
                  desc={job.jobDescription}
                  img={job.jobImg}
                />
              </FadeInSection>
            );
          }
        })}

    </>
  );
}
