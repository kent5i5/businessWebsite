
# Graphql documentation:

###### Updated: 3/21/2021 

[Official Website](https://docs.amplify.aws/cli/graphql-transformer/overview#test-the-api)

    By default, schemas are saved in amplify/backend/api/YOUR-API-NAME/schema.graphql. If the schema.graphql file exists, it will take precedence over option 2.
    Optionally, schemas may be saved as a set of .graphql files stored in the amplify/backend/api/YOUR-API-NAME/schema/ directory. E.g. you might have files Query.graphql, User.graphql, and Post.graphql.

# Define Access Patterns and NoSQL Schema

    For NoSQL( Cassandra, DyanmicDB) design requires thinking about access patterns.  In Amazon DynamoDB, Asking questions and Understanding the business problems and the application use cases up front is the first step. Later, we can create schema that provides best performance to answer these questions since efficiency of read and write is key factor for NoSQL database.

1. Look for business Id
2. Query business detail with business name
3. Find business address
4. Find business anual result (the year)
5. Find the result of the business of the month

NoSQL is defined with star schema. For example, Business Entity partitions on the table have additional edge items that contain pointers to other entity items on the table

The partition key portion of a table's primary key also determines the logical partitions in which a table's data is stored. In NoSQL, composite primary key can be used to have two 

If there are more than 1 Sorting key, NoSQL will use the order defined.

Business - PK: BusinessID, SK: BusinessName , Region, Country, Location

Business -Region - PK: RegionID, SK: RegionName

HR-Country - PK: CountryId, SK: CountryName

HR-Location - PK: LocationID, SK: LocationName

## Use key() to define additinoal retrieve methods

By define, the get entity by id is provided.

'''
type Business @model {
  @key(name: "getBusinessByTitle", fields: ["title"], queryField: "getBusinessByTitle") {
  id: ID!
  title: String!
  description: String!
}
'''
getBusinessByTitle will the query to fetch business. Fields can have two or more attribute as compound key and the query result will be sorted in the given order of attributes.

# Define Data Model with Graphql 

###### Updated: 3/23/2021 

## @Auth

'''
# The simplest case
type Post @model @auth(rules: [{ allow: owner }]) {
  id: ID!
  title: String!
}
'''
(Owner authorization specifies whether a user can access or operate against an object. To do so, each object will get an ownerField field (by default owner will be added to the object if not specified) 


## @Connection

The @connection directive enables you to specify relationships between @model types. Currently, this supports one-to-one, one-to-many, and many-to-one relationships. You may implement many-to-many relationships using two one-to-many connections and a joining @model type. 

A Has One @connection can only reference the primary index of a model 

```
type Project @model {
  id: ID!
  name: String
  teamID: ID!
  team: Team @connection(fields: ["teamID"])
}

type Team @model {
  id: ID!
  name: String!
}
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
