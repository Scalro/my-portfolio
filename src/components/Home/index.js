import './home.scss'
import profileImage from '../../assets/images/myprof.png'
const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <img className="im" src={profileImage} alt="Caleb Rotich" />
      </div>
      <div className="right">
        <h1>
          <i>Hello,</i> <i style={{ color: '#03fcca' }}>I am</i>{' '}
          <b style={{ color: '#00ff00' }}>CALEB ROTICH</b>
        </h1>
        <hr />
        <p>Software Engineer</p>
        <p>
          With a fervent dedication to software development, I possess a
          versatile skill set encompassing Java, JavaScript, Python, HTML, CSS,
          Dart, and their respective frameworks. Proficient in data structures
          and algorithms, software project management, and system analysis, I
          possess the expertise to create web, mobile, and desktop applications.
          My passion for technology drives my commitment to delivering
          innovative and impactful solutions.
        </p>
      </div>
    </div>
  )
}

export default Home
