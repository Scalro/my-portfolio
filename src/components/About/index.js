import './index.scss' // Import the SCSS file
import profileImage from '../../assets/images/about-us.jpeg' // Adjust the path to your profile image

function About() {
  return (
    <div className="about">
      <div className="left">
        <img className="profile-image" src={profileImage} alt="Caleb Rotich" />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <hr />
        <p>Hello, I am Caleb Rotich, a Software Engineer.</p>
        <p>
          I graduated from the University of Eastern Africa Baraton in August
          2023.
        </p>
        <p>
          I am passionate about software development and eager to demonstrate my
          skills and expertise.
        </p>
        <p>
          I am currently looking for opportunities to work on innovative and
          impactful projects.
        </p>
        <p>
          <i>
            <h3>
              To know more about me, and my projects check the links on the left
              bottom Sidebar. Thank you for visiting my portfolio.
            </h3>
          </i>
        </p>
      </div>
    </div>
  )
}

export default About
