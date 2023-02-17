import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

const data = {
  preview:
    'https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/preview.png',
  events: [
    {
      title: 'Person of Interest',
      subtitle: 'Filip Kaliszan',
      site: '3rd Floor',
      detail: 'Elevator East Lobby',
      image:
        'https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event1.png',
      timestamp: 1612247209,
    },
    {
      title: 'Motion',
      subtitle: 'People Detected',
      site: 'Outside',
      detail: 'Front Door',
      image:
        'https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event2.png',
      timestamp: 1612207950,
    },
    {
      title: 'Crowd',
      subtitle: '2 or more people',
      site: 'London',
      detail: 'Intersection',
      image:
        'https://verkada-public-data.s3-us-west-2.amazonaws.com/frontend-interview/event3.png',
      timestamp: 1612202420,
    },
  ],
};

function App() {
  const [preview, setPreview] = useState(data.preview);
  const [events, setEvents] = useState(data.events);

  const getTime = (timestamp) => {
    const date = new Date(timestamp * 1000);

    const hours = ('0' + date.getHours()).slice(-2); // Add leading zero and slice last 2 digits
    const minutes = ('0' + date.getMinutes()).slice(-2); // Add leading zero and slice last 2 digits
    return hours > 12
      ? hours - 12 + ':' + minutes + 'PM'
      : hours + ':' + minutes + 'AM';
  };

  return (
    <div className="container">
      <div className="header">
        <img className="bigImg" src={preview} />
        <div className="topLeft">
          <div className="circle" />
          live
        </div>
      </div>
      <div className="whiteBackground">
        <div className="inputContainer">
          <input class="input" type="text" placeholder="Search Events" />
        </div>
        <div className="eventList">
          {events.map((event) => {
            return (
              <div className="event">
                <div className="imgColumn">
                  <img className="smallImg" src={event.image} />
                </div>
                <div className="secondColumn">
                  <div className="nameColumn">
                    <div className="title">{event.title}</div>
                    <div className="subTitle">{event.subtitle}</div>
                  </div>
                  <div className="locationColumn">
                    {event.site + ' - ' + event.detail}
                  </div>
                  <div className="timeColumn">{getTime(event.timestamp)}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
