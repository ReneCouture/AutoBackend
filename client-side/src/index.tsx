import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Container, Row, Col, Button, Alert } from 'reactstrap';
import { tableFromPropsAndValues } from './Table-render-functions/tableFromPropsAndValues';
import { dataPlacerHolderPseudoRandom, dataPlacerHolderPseudoCounter } from './DataPlaceholder';
import { tableFromObjects } from './Table-render-functions/tableFromObjects';
import { wishCreate, allTheWishes } from './Wish/Wish';
import { wishGet } from './Wish/WishGet';
import { wishGenerateAll } from './Wish/WishGenerateAll';
import { AlertError } from './Helpers/AlertError';
import { AlertSuccess } from './Helpers/AlertSuccess';

//I am defining wishes here because inside the constructor, it was making twice as many wishes.
//we want the data we wish we could receive defined once.
const wishTrucks=wishCreate("wish_trucks",
  {//define the data we wish we could receive from the server
    name:   dataPlacerHolderPseudoRandom('string',["Sneezy","Old Pete","Top Cat"]),
    color:  dataPlacerHolderPseudoRandom('string',["red","blue","black"]),
  })

const wishLocations=wishCreate("wish_locations",
  {
    county: dataPlacerHolderPseudoRandom('string',["Springfield","Albany","Reston"]),
    zip:    dataPlacerHolderPseudoCounter('number',10000)
  })

class App extends React.Component<any,any>
{
  constructor(props:any)
  {
    super(props)
    this.state={
      trucks:[],          //we'll store our data here after it is fetched
      locations:[],
      errorObj:null,      //holds error object and a possible message to display in an alert
      errorMessage:"",
      successMessage:"",  //holds a success message to display in an alert
    }
  }

  componentDidMount=async()=>
  {
    let t=await wishGet(wishTrucks)
    let l=await wishGet(wishLocations)

    this.setState({
      trucks:t,
      locations:l,
    })
  }

  render()
  {
    return (<>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
      <Container>
        <p>This website will be an example of how auto-backend will work. This site calculates locations for trucks to drive to.</p>
        <AlertError message={this.state.errorMessage} error={this.state.error}/>
        <AlertSuccess message={this.state.successMessage}/>
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
            <Row>
                <Col><h4>All wishes</h4>  </Col>
                <Col><Button onClick={this.clickGenerate}>Generate</Button> </Col>
            </Row>
            {tableFromObjects(allTheWishes)}
          </Col>
        </Row>
      </Container>
    </>)
  }

  clickGenerate=async()=>
  {
    try
    {
      await wishGenerateAll()

      this.setState({
        successMessage:"Backend has been generated from wishes"
      })
    }
    catch(e)
    {
      this.setState({
        errorObj:e,
        errorMessage:"Could not generate all wishes"
      })
    }
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
