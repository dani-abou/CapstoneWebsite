import { PEOPLE } from "./people";
import './styles.css';

function lastName(person) {
  const allWords = person.fullName.split(' ');
  return allWords[allWords.length - 1]
}

function firstNameLowercase(person) {
  return person.fullName.split(' ')[0].toLowerCase();
}

export default function People() {
  return <>
    {
      PEOPLE.sort((a, b) => lastName(a) > lastName(b))
        .map((person, index) => (
          <div className={`person ${index % 2 === 1 ? 'rightPerson' : 'leftPerson'}`} key={index}>
            <img src={require(`../../images/people/${firstNameLowercase(person)}.jpg`)} alt={index} className="personImg" />
            <div style={{ margin: '0 20px' }}>
              <h1>{person.fullName}</h1>
              <br />
              <p>{person.bio}</p>
            </div>
          </div>
        ))
    }
  </>
}