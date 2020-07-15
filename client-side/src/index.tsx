import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Container, Row, Col } from 'reactstrap';
import { wishGet, wishCreate, allTheWishes } from './Wish';
import { tableFromPropsAndValues } from './Table-render-functions/tableFromPropsAndValues';
import { dataPlacerHolderPseudoRandom, dataPlacerHolderPseudoCounter } from './DataPlaceholder';
import { tableFromObjects } from './Table-render-functions/tableFromObjects';

//I am defining wishes here because inside the constructor, it was making twice as many wishes.
//we want the data we wish we could receive defined once.
const wishTrucks=wishCreate(
  {//define the data we wish we could receive from the server
    name:   dataPlacerHolderPseudoRandom(["Mack","Old Pete"]),
    color:  dataPlacerHolderPseudoRandom(["red","blue"]),
  })

const wishLocations=wishCreate(
  {
    county: dataPlacerHolderPseudoRandom(["Springfield","Nework"]),
    zip:    dataPlacerHolderPseudoCounter(10000)
  })

class App extends React.Component<any,any>
{
  constructor(props:any)
  {
    super(props)
    this.state={
      trucks:[], //we'll store our data here after it is fetched
      locations:[],
    }
  }

  componentDidMount=async()=>
  {
    let t=await wishGet(wishTrucks)
    let l=await wishGet(wishLocations)

    this.setState({
      trucks:t,
      locations:l
    })
  }

  render()
  {
    return (<>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      <Container>
        <p>This website will be an example of how auto-backend will work. This site calculates locations for trucks to drive to.</p>
        <Row>
          <Col>
            <h4>Trucks</h4>
            {tableFromPropsAndValues(this.state.trucks)}
          </Col>
          <Col>
            <h4>Locations</h4>
            {tableFromPropsAndValues(this.state.locations)}
          </Col>
          <Col>
            <h4>All wishes</h4>
            {tableFromObjects(allTheWishes)}
          </Col>
        </Row>
      </Container>
    </>)
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
