import React from 'react';
import { Row, Col } from 'react-materialize';
import Map from '../../components/Images/cltmap.jpg'
import './style.css'
import WorkForBeer from '../../components/Images/WorkForBeer.png'
import RunForBeer from '../../components/Images/runforbeer.png'
import Trivia from '../../components/Images/trivia.JPG'

function Community() {
  return (
    <div>
          <h3 className="community">connect with neighbors.</h3>
          <img src={Map} alt="skyline" className="image" />
          <Row>
            <Col className="center" 
            s={12}
            m={6}
            l={4}>
          <a  href="https://workforyourbeer.com/" target="blank"><img src={WorkForBeer} alt="workforbeer" className="workforbeer center"/></a>
          <p className="tagline center">workout first, beer second</p>
          </Col>
          <Col className="center"
           s={12}
           m={6}
           l={4}>
          <a  href="https://www.charlotteagenda.com/2219/charlotte-run-clubs-with-beverages-8-runs-in-8-days/" target="blank"><img src={RunForBeer} alt="runforbeer" className="run center"/></a>
          <p className="tagline center">run for beer. every single day.</p>
          </Col>
          <Col className="center"
           s={12}
           m={6}
           l={4}>
          <a  href="https://www.charlotteagenda.com/34362/bar-trivia-in-charlotte/" target="blank"><img src={Trivia} alt="trivia" className="trivia center"/></a>
          <p className="tagline center">are you smarter than a 5th grader?</p>
          </Col>
          </Row>
    </div>
  )
}

export default Community;