import React from "react";
import JobRight from "./JobRight.jsx";
import JobLeft from "./JobLeft.jsx";
import FadeInSection from "../../Utils/FadeInSection";
// import "./styles/Job.css";
import OcrImage from '../../../assets/Ocr.svg';
import News from '../../../assets/News.svg';
import Clock from '../../../assets/Clock.svg';
import Pdf from '../../../assets/pdf.svg';
import Calculator from '../../../assets/Calculator.svg';

export default function Job() {
  const initialJobs = [
    {
      productName: "OCR Convert PDF or Image to Text",
      emoji: "♔",
      productTitle: "グラスファム OCR",
      jobLocation: "",
      jobDescription:
        "OCR, or Optical Character Recognition, is a technology that enables the conversion of various types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data. By analyzing the visual patterns of characters and symbols in the input document, OCR software identifies and interprets the text, enabling users to extract, edit, and manipulate the content digitally. This technology finds applications across a wide range of industries, including finance, healthcare, legal, and education, where digitizing and processing large volumes of text-based information is essential for efficiency and productivity. OCR systems have evolved to provide high accuracy levels, even with complex fonts, languages, and formatting structures, contributing significantly to streamlining document management processes and facilitating accessibility for individuals with visual impairments.",
      jobImg:
        OcrImage
    },
    {
      productName: "Count Total Number of Character Appear on Text",
      emoji: "🎨",
      productTitle: "グラスファム Character Counter",
      jobLocation: "",
      jobDescription:
        "A Character Counter is a tool or function that calculates and displays the total number of characters present in a given text string. It counts every character, including letters, numbers, punctuation marks, whitespace, and special symbols, providing a simple numeric representation of the text length.",
      jobImg:
        Clock
    },
    {
      productName: "Convert Document to Any Document",
      emoji: "🤓",
      productTitle: "グラスファム Document Converter",
      jobLocation: "",
      jobDescription:
        "A document converter is a software tool or service that facilitates the conversion of files from one format to another. This conversion process enables users to transform documents into different formats, preserving content, structure, and formatting as much as possible.",
      jobImg:
        Pdf
    },
    {
      productName: "Calculate or Convert the One UoM to Another UoM",
      emoji: "🎓",
      productTitle: "グラスファム Smart Calculator",
      jobLocation: "",
      jobDescription:
        "Smart calculators can convert between different units of measurement across various physical quantities, such as length, area, volume, weight, temperature, time, speed, and more.",
      jobImg:
        Calculator
    },
    {
      productName: "Information can Fullfill Your Need",
      emoji: "🖨",
      productTitle: "グラスファム Central Information",
      jobLocation: "",
      jobDescription:
        "Central Information is a comprehensive tool designed to offer users a centralized hub for accessing diverse content, including news updates, informational articles, intriguing facts, and prayer schedules. This multifaceted platform aims to keep users informed and engaged by providing a curated selection of the latest news headlines, insightful articles on various topics, fascinating facts to broaden knowledge horizons, and convenient prayer schedules tailored to specific locations and religious preferences. Central Information serves as a one-stop destination, catering to the informational needs and interests of users, while promoting awareness, enlightenment, and convenience in a single intuitive interface.",
      jobImg:
        News
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
                name={job.productName}
                emoji={job.emoji}
                title={job.productTitle}
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
                name={job.productName}
                emoji={job.emoji}
                title={job.productTitle}
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
