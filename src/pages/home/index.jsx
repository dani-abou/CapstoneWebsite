import { CONTENTS } from './contents'
import './styles.css'

export default function Home() {
  return <div>
    <br /><br />
    <h1 style={{ textAlign: 'center' }}>Northeastern Music Technology 2023</h1>

    <div className='section'>
      <h3>Event Info</h3>
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