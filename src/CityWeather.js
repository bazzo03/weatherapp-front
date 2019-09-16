import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


/*function fetchAPI(param) {
  // param is a highlighted word from the user before it clicked the button
  return fetch("localhost:8080?cityName=" + param);
}*/

class CityWeather extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          weather: props.data,
        };

        this.renderTableData = this.renderTableData.bind(this);
        this.renderTableHeader = this.renderTableHeader.bind(this);

      }
    
      renderTableHeader() {
        let headers= ['Date', 'Temp. Min Celcius', 'Temp. Min Far', 'Temp. Max Cel', 'Temp. Max Far', 'Condition'];
        //let header = Object.keys(headers2)
        return headers.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
     }


      renderTableData() {
        return this.props.data.map((day, id) => {
           const { date, tempMinC, tempMinF, tempMaxC, tempMaxF, sky } = day //destructuring
           return (
              <tr key={id} className="table">
                 <td>{date}</td>
                 <td>{tempMinC}º C</td>
                 <td>{tempMinF}º F</td>
                 <td>{tempMaxC}º C</td>
                 <td>{tempMaxF}º F</td>
                 <td>{sky}</td>
              </tr>
           )
        })
     }

      render() {
        return (
            <div>
            <h1 id='title'>{this.props.tableTitle}</h1>
            <table id='weather'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
        );
      }
}

export default CityWeather
