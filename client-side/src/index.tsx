import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Container, Row, Col } from 'reactstrap';
import { Wish, ask } from './Wish';
import { tableFromObjects } from './Table-render-functions/tableFromObjects';
import { pseudoValues } from './PseudoData';

class App extends React.Component<any,any>
{
  constructor(props:any)
  {
    super(props)

    this.state={
      trucks:[], //we'll store our data here after it is fetched
      locations:[],

      wishTrucks:new Wish(
        {//define the data we wish we could receive from the server
          name:   pseudoValues("Mack","Old Pete","Silverado","Clunker","Topcat"),
          color:  pseudoValues("red","blue","black","silver"),
        }
      ),

      wishLocations:new Wish(
        {
          state:  pseudoValues("VT","TX","FL","CA","SC","AL","HI"),
          zip:    pseudoValues("02381","101421","385733","29443"),
        }
      )
    }
  }

  componentDidMount=async()=>
  {
    let t=await ask(this.state.wishTrucks)
    let l=await ask(this.state.wishLocations)

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
            {tableFromObjects(this.state.trucks)}
          </Col>
          <Col>
            <h4>Locations</h4>
            {tableFromObjects(this.state.locations)}
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
