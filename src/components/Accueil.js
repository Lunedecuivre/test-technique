import React, { Component } from "react";
import axios from "axios";

class Accueil extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userList: []
    };
  }

  componentWillMount() {
    axios
      .get("./users.json") // JSON File Path
      .then(response => {
        this.setState({
          userList: response.data,
          loading: false
        });
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          {this.state.userList.map((value, index) => {
            return (
              <div className="page1container">
                <img src="../../files/header_background.jpg" />
                <h1>Lorem Ipsum</h1>
                <h3>Le lorem ipsum blabla</h3>

                <div id="table">
                  <div className="limiter">
                    <div className="container-table100">
                      <div className="wrap-table100">
                        <div className="table100">
                          <table>
                            <thead>
                              <tr className="table100-head">
                                <th className="column1">
                                  Nom <i className="fas fa-sort-down" />
                                </th>
                                <th className="column2">
                                  Email <i className="fas fa-sort-down" />
                                </th>
                                <th className="column3">
                                  Âge <i className="fas fa-sort-down" />
                                </th>
                                <th className="column4">
                                  Ville <i className="fas fa-sort-down" />
                                </th>
                                <th className="column5">Plus</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="column1">{value.firstname}</td>
                                <td className="column2">200398</td>
                                <td className="column3">iPhone X 64Gb Grey</td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>
                              </tr>
                              <tr>
                                <td className="column1">2017-09-28 05:57</td>
                                <td className="column2">200397</td>
                                <td className="column3">Samsung S8 Black</td>
                                <td className="column4">$756.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>
                              </tr>
                              <tr>
                                <td className="column1">2017-09-26 05:57</td>
                                <td className="column2">200396</td>
                                <td className="column3">
                                  Game Console Controller
                                </td>
                                <td className="column4">$22.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-25 23:06</td>
                                <td className="column2">200392</td>
                                <td className="column3">USB 3.0 Cable</td>
                                <td className="column4">$10.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-24 05:57</td>
                                <td className="column2">200391</td>
                                <td className="column3">
                                  Smartwatch 4.0 LTE Wifi
                                </td>
                                <td className="column4">$199.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-23 05:57</td>
                                <td className="column2">200390</td>
                                <td className="column3">Camera C430W 4k</td>
                                <td className="column4">$699.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-22 05:57</td>
                                <td className="column2">200389</td>
                                <td className="column3">
                                  Macbook Pro Retina 2017
                                </td>
                                <td className="column4">$2199.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-21 05:57</td>
                                <td className="column2">200388</td>
                                <td className="column3">
                                  Game Console Controller
                                </td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-19 05:57</td>
                                <td className="column2">200387</td>
                                <td className="column3">iPhone X 64Gb Grey</td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-18 05:57</td>
                                <td className="column2">200386</td>
                                <td className="column3">iPhone X 64Gb Grey</td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-22 05:57</td>
                                <td className="column2">200389</td>
                                <td className="column3">
                                  Macbook Pro Retina 2017
                                </td>
                                <td className="column4">$2199.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-21 05:57</td>
                                <td className="column2">200388</td>
                                <td className="column3">
                                  Game Console Controller
                                </td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-19 05:57</td>
                                <td className="column2">200387</td>
                                <td className="column3">iPhone X 64Gb Grey</td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                              <tr>
                                <td className="column1">2017-09-18 05:57</td>
                                <td className="column2">200386</td>
                                <td className="column3">iPhone X 64Gb Grey</td>
                                <td className="column4">$999.00</td>
                                <td className="column5">
                                  <i className="fas fa-plus-circle" />
                                </td>{" "}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default Accueil;
