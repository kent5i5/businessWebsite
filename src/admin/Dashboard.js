import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Button , Tab, Row, Col, Nav} from 'react-bootstrap';
import Login from "./Login";
import AuthButton from "./AuthButton";
import { Link } from "react-router-dom";
import Analysis from "../business/Analysis";
class Dashboard extends Component {

   

    render() {
        return (
            <div>
            <Row><Col sm={3}></Col><Col sm={3}><h1>Dashboard</h1></Col><Col sm={3}></Col></Row>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                   <AuthButton />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Analysis />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

            <Button  variant="secondary"><Link exact to="/">Home</Link></Button>
            </div>

       
        )
    }
}

export default withAuthenticator(Dashboard);