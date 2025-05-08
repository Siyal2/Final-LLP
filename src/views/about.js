import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features11 from '../components/features11'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Spotless Hungry Crocodile</title>
        <meta property="og:title" content="About - Spotless Hungry Crocodile" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="about-text10">Home</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text11">Contact Us</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text12">Action 2</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text13">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text14">Programs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text15">Get Involved</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text16">Action 1</span>
          </Fragment>
        }
        logoSrc="/rajeshivlogo-1500h.jpg"
      ></Navbar4>
      <Hero8
        content1={
          <Fragment>
            <span className="about-text17">
              Empowering communities through education, healthcare, and social
              welfare initiatives
            </span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text18">Get Involved</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text19">
              Welcome to Raje Shivchatrapati Multipurpose Charitable Institute
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text20">Donate Now</span>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text21">Educational Programs</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text22">
              Offering a wide range of educational programs for all age groups
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text23">
              Empowering individuals through knowledge and skills development
            </span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text24">Community Events</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text25">Health Initiatives</span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text26">
              Dedicated to providing quality education to all
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text27">Our Impact</span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text28">
              Promoting health and wellness in the community
            </span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text29">Healthcare Professionals</span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text30">
              Bringing communities together through engaging events
            </span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text31">
              Empowering individuals through education
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text32">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features11
        mainAction={
          <Fragment>
            <span className="about-text33">Get Involved</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text34">Health Initiatives</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text35">Educational Programs</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text36">
              Offering a range of educational programs to empower individuals
              with knowledge and skills.
            </span>
          </Fragment>
        }
        slogan={
          <Fragment>
            <span className="about-text37">
              Empowering Communities Through Education, Healthcare, and Social
              Welfare Initiatives
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text38">Skill Development Workshops</span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text39">
              Conducting workshops to enhance skills and promote personal growth
              within the community.
            </span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text40">
              Explore the key features of Raje Shivchatrapati Multipurpose
              Charitable Institute.
            </span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text41">Donate</span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text42">
              Providing healthcare initiatives to ensure the well-being of
              community members.
            </span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text43">Features</span>
          </Fragment>
        }
      ></Features11>
      <Team1
        member5Content={
          <Fragment>
            <span className="about-text44">
              Juan Rodriguez conducts workshops and training sessions to enhance
              the skills of individuals in our community.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text45">
              Sarah Johnson brings years of experience in education management
              and curriculum development to our institute.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text46">
              Linda Garcia oversees our dedicated team of volunteers and ensures
              smooth operations.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text47">Meet Our Team</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text48">Healthcare Coordinator</span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text49">
              Aisha Khan works tirelessly to connect with the community and
              address their needs effectively.
            </span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text50">Head of Education Programs</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text51">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text52">Linda Garcia</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text53">David Wilson</span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text54">
              David Wilson ensures the financial sustainability of our
              institute&apos;s charitable initiatives.
            </span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text55">Volunteer Coordinator</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text56">We’re hiring!</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text57">Sarah Johnson</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text58">Event Coordinator</span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text59">
              Michael Lee is dedicated to ensuring the well-being of our
              community through healthcare initiatives.
            </span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text60">Open positions</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text61">Emily Chen</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text62">Juan Rodriguez</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text63">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text64">Community Outreach Specialist</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text65">Founder &amp; President</span>
          </Fragment>
        }
        member1={
          <Fragment>
            <span className="about-text66">Dr. Rajesh Patel</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text67">Aisha Khan</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text68">Finance Manager</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text69">Michael Lee</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text70">
              Dr. Rajesh Patel is a renowned philanthropist with a passion for
              community development and empowerment.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text71">Join Our Team Today!</span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text72">
              Emily Chen organizes engaging community events to foster a sense
              of unity and belonging.
            </span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text73">Skill Development Trainer</span>
          </Fragment>
        }
      ></Team1>
      <Footer1
        column2Title={
          <Fragment>
            <span className="about-text74">Connect With Us</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-text75">Volunteer</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text76">Get Involved</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-text77">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text78">/cookies-policy</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text79">Designed by XYZ Design Studio</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text80">Events</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text81">Cookies Policy</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text82">
              © 2023 Raje Shivchatrapati Multipurpose Charitable Institute. All
              Rights Reserved.
            </span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="about-text83">Facebook</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="about-text84">Donate</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="about-text85">Home</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text86">/privacy-policy</span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="about-text87">Instagram</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="about-text88">Quick Links</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text89">/terms-and-conditions</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text90">Programs</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text91">About Us</span>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <span className="about-text92">Follow Us</span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default About
