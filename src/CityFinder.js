import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CityWeather from './CityWeather';


/*function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("localhost:8080?cityName=" + param);
}*/

class CityFinder extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          value: '',
          select: 'apixuWeather',
          weather: [],
          tableTitle: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.routeChange = this.routeChange.bind(this);
    }
    
    handleChange(event) {
      //this.setState({select: event.target.value});
      this.state.select=event.target.value;
    }
    handleOnChange(event) {
      this.setState({value: event.target.value});
    }
     routeChange() {
        let cityName = this.state.value;
        let selectedApi = this.state.select;
        fetch('http://localhost:8080/api/weather/' + cityName + '?apiServer=' + selectedApi)
        .then(response =>  {
            return response.json()})
           .then((data) => {
             this.setState( {
               weather: data,
               tableTitle: this.state.value
             });
            })
           .catch((error) => {
             console.log(error);
           })
      }

      render() {
        return (
          <div>
            <label>
              City:
              <input type="text" value={this.state.value} onChange={this.handleOnChange} />
            </label>
            <div>
              <label>
                  Please select the weather provider
              </label>
            </div>
            <div>
              <select onChange={this.handleChange}>
                <option value="apixuWeather">Apixu</option>
                <option value="weatherUnlocked">Weather Unlocked</option>
              </select>
            </div>
            <div>
              <p></p>
            </div>
            <div>
              <button onClick={this.routeChange} id="callApiButton" >Call Weather API</button>
            </div>

              <CityWeather data={this.state.weather} tableTitle={this.state.tableTitle} Weather/>
          </div>
        );
      }
}

export default CityFinder
