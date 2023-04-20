import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMemo, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import { formatNames } from '../projects';
import { PROJECTS } from '../projects/projects';
import "./styles.css";

function AccordionSection({ project, time, location }) {
  return <AccordionItem >
    <AccordionItemHeading>
      <AccordionItemButton>
        <div className="event-program-item" style={{ cursor: 'pointer' }}>
          <div className="event-program-time">{time ? `${time} PM` : ''}</div>
          <div className="event-program-title">{location === "musicalNotes" ? project.musicName : project.name}</div>
          <div className="event-program-speaker">{formatNames(project.members)}</div>
        </div>
      </AccordionItemButton>
    </AccordionItemHeading>
    <AccordionItemPanel>
      <p className='accordion-text'>
        {project[location]}
      </p>
    </AccordionItemPanel>
  </AccordionItem>

}

function Section({ section, location }) {
  return section.map(pres => {
    return <AccordionSection key={pres.id} project={PROJECTS[pres.id]} time={pres.time} location={location} />
  })
}

const PRESENTATIONS = [
  { time: '1:00', id: 'josh' },
  { time: '1:15', id: 'absolute' },
  { time: '1:30', id: 'ayla' },
  { time: '1:55', id: 'nelwintao' },
  { time: '2:10', id: 'cassettes' },
  { time: '2:25', id: 'wilson' },
  { time: '2:50', id: 'axetron' },
  { time: '3:05', id: 'deepdeadnet' },
  { time: '3:20', id: 'morgan' },
]

const MUSIC = [
  { time: '4:10', id: 'josh' },
  { time: '', id: 'absolute' },
  { time: '', id: 'cassettes' },
  { time: '', id: 'ayla' },
  { time: '', id: 'axetron' }
]

const DEMOS = [
  'ayla',
  'deepdeadnet',
  'axetron',
  'absolute',
  'nelwintao',
  'morgan',
  'wilson'
]


export default function Project() {
  return <div className="event-program">
    <h3 className="event-program-day">Saturday, April 22nd (Presentations)</h3>
    <Accordion allowMultipleExpanded
      allowZeroExpanded>
      <div>
        <Section section={PRESENTATIONS.slice(0, 3)} location='description' />
        <div className="event-program-item">
          <div className="event-program-time">1:45 PM</div>
          <div className="event-program-title">Break</div>
          <div className="event-program-speaker"></div>
        </div>
        <Section section={PRESENTATIONS.slice(3, 6)} location='description' />
        <div className="event-program-item">
          <div className="event-program-time">2:40 PM</div>
          <div className="event-program-title">Break</div>
          <div className="event-program-speaker"></div>
        </div>
        <Section section={PRESENTATIONS.slice(6, 9)} location='description' />

        <div className="event-program-item">
          <div className="event-program-time">3:35 PM</div>
          <div className="event-program-title">Food and Refreshments</div>
          <div className="event-program-speaker"></div>
        </div>
        <h3 className="event-program-day">Saturday, April 22nd (Performances)</h3>
        <Section section={MUSIC} location='musicalNotes' />

        <h3 className="event-program-day">Sunday, April 23nd (Demonstrations)</h3>

        <div className="event-program-item">
          <div className="event-program-time">3:00 PM</div>
          <div className="event-program-title">Introduction and Closing Remarks</div>
          <div className="event-program-speaker"></div>
        </div>
        {DEMOS.map(demo => {
          return <AccordionSection key={demo} project={PROJECTS[demo]} time={demo === 'ayla' ? '3:05' : ''} location='demoNotes' />
        })}

      </div>
    </Accordion>
  </div>

}