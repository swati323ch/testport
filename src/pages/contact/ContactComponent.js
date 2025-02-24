import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactImg from "./contactImg"; // Correct import as a React component
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { css } from "glamor";

const contactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const buttonStyles = css({
    backgroundColor: theme.accentBright,
    padding: "10px 20px",
    borderRadius: "5px",
    color: "#fff",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <ContactImg />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {contactData.title}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {contactData.description}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                {...buttonStyles}
                className="general-btn"
                href={greeting.resumeLink}
              >
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection.title}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              ></p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
