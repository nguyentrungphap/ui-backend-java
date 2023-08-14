import { Card, CardContent, CardHeader } from "@material-ui/core";
import React, { Component } from "react";

class AdminPanel extends Component {
  render() {
    return (
      <Card>
        <CardHeader title="Welcome to Admin Panel" />
        <CardContent>This is the board to control all.</CardContent>
      </Card>
    );
  }
}

export default AdminPanel;
