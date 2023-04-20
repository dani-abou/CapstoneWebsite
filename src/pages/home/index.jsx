import { CONTENTS } from './contents'
import './styles.css'

export default function Home() {
  return <div>
    <br />
    <h1 className='title'>Northeastern University Music Technology Capstone - 2023</h1>

    <div className='section'>
      <h3>Event Info</h3>
      <ul>
        <li>Venue: <a href="https://goo.gl/maps/zS2ATB3GebYBRDgq8" target="_blank" rel="noopener noreferrer">Fenway Center</a></li>
        <li>Address: 77 St Stephen St, Boston, MA 02115, United States</li>
      </ul> 
      <br />
      <p>{CONTENTS.eventInfo}</p>
    </div>

    <br />
    <br />
    <div className='section' style={{ backgroundColor: 'lightgrey' }}>
      <h3>About Us</h3>
      <br />
      <p>{CONTENTS.aboutUs}</p>
      <br /><br />

    </div>


  </div>
}