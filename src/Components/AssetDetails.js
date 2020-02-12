import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Output from "../output.json";

//import "./assets.css"

var data = require('../output.json'); // forward slashes will depend on the file location

for(var i = 0; i < data.length; i++) {
    var obj = data[i];
}

class AssetDetails extends Component {
  
  componentWillMount() {
    console.log(data.DeviceTopic)
  }

  constructor(props) {
    super(props);
    this.state = {
      assets:[]
    }
  }

  render() {

   

    const styleObj = {
      fontSize: 13,
      color: "#4a54f1",
      textAlign: "center",           
      fontFamily: 'quicksand,sans-serif'
    }   
    const tableHeader = (
      <TableHead>
        <TableRow >
          <TableCell><b style={styleObj}>Device Name</b></TableCell>
          <TableCell><b style={styleObj}>Device Topic</b></TableCell>
          <TableCell><b style={styleObj}>Device Message</b></TableCell>
          <TableCell><b style={styleObj}>Local IP Address</b></TableCell>
          <TableCell><b style={styleObj}>Destination IP Address</b></TableCell>
        </TableRow>
      </TableHead>
    );
    const content = (
      <TableBody>
          <TableRow>
            <TableCell>DHT_11</TableCell>
            <TableCell>{data.deviceTopic}</TableCell>
            <TableCell>{data.deviceMessage}</TableCell>
            <TableCell>192.168.43.122</TableCell>
            <TableCell>106.15.100.2</TableCell>
          </TableRow>
      </TableBody>
    );  
    return (
      <div className="App-GridDiv">
        <Grid container justify="center">
          <Paper>
            <Table>
              {tableHeader}
              {content}
            </Table>
          </Paper>
        </Grid>
      </div>
    );
  }
}
//<TableCell>{asset.timeLastShown}</TableCell>
export default AssetDetails;