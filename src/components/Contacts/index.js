import './index.scss'
import profileImage from '../../assets/images/contact-us.avif'

const Contacts = () => {
  return (
    <div className="contact">
      <div className="left">
        <img className="im" src={profileImage} alt="Caleb Rotich" />
      </div>
      <div className="right">
        <h1>
          <b>CONTACT ME</b>
        </h1>
        <hr />
        <div className="container">
          <div className="contact-form">
            <form>
              {/* Your form fields go here */}
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
              <label htmlFor="name">Email:</label>
              <input type="text" id="email" name="email" />
              <label htmlFor="name">Message:</label>
              <textarea type="text" id="message" name="message" />
              {/* Add more form fields as needed */}
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-details">
            {/* Your contact details go here */}
            <div className="card">
              {/* Card details */}
              <p>Phone Number: +254703542430</p>
              <p>WhatsApp Number: +254725545610</p>
              <p>Email: rotichcaleb200@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
