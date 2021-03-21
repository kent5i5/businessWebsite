
import React from 'react';

import MyTable from './MyTable';

// const rootReducers = combineReducers({
import  {FetchCollection,parseReducer  } from 'react-parse'
//     parse: parseReducer,
// });

// import { config as reactParseConfig, setReactParseDispatch,FetchCollection,parseReducer  } from 'react-parse'
// //const apiConfig = { baseURL: envConfig.SERVER_URL, appId: envConfig.PARSE_ID }
// const apiConfig = { baseURL: "http://18.237.93.68/parse", appId: "myappID" }
// reactParseConfig.init(apiConfig);
//setReactParseDispatch(store.dispatch)

//import Parse from 'parse/dist/parse.min.js';
const Parse = require('parse');
//reactParseConfig.setSessionToken('userSessionToken')

Parse.initialize("myappID")
        
Parse.serverURL = 'http://34.220.17.115/parse/'


class ReactParseExample extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        items: []
        };  
    }


    connnection = async (event) =>{
        const currentUser = Parse.User.current();
        if(currentUser == null){
            try{
                
                await Parse.User.logIn("ken", "123456");
                alert("Logged in!");
                this.setState({
                   // isLoaded: true,
                    
                })
            } catch (e){
                alert(e.message); 
            }
        }
        
    }

    retrieveJobs = async (event) =>{
        const TARGET_NAME = 'Jobs'
        const Jobs = Parse.Object.extend(TARGET_NAME);
        const query = new Parse.Query(Jobs);
        query.equalTo("createdby", "ken");
        query.find().then((Jobs) => {
            // The object was retrieved successfully.
            Jobs.forEach(Job=> {
                this.setState({
                    isLoaded: true,
                    items:Job
                })
                    
            });
            
            console.log(Jobs)
          }, (error) => {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          });
    }


    componentDidMount() {
        this.connnection()
        this.retrieveJobs()
        
    }
    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {
        return (
            <div>
            {/* <FetchCollection 
                schemaName={'User'}
                targetName={TARGET_NAME}
                query={{isActive: true}}
                userName='ken'
                render={(p
                    rops) => <MyTable {...props}/>}
            /> */}
           <h4>Hello  {Parse.User.current().getUsername()}</h4> 
        </div>
        )
        }
    }
}

export default ReactParseExample;