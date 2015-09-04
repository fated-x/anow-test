# Anow Developer Test
### Requirements

Build an angular app for tracking ping pong wins and losses. A basic angular app has been scaffolded in this repo, use as much or as little of this as you like. What we would like to see how you use angular, we don't want you to spend days on this. Have some fun and complete as much as you can we understand if you don't meet all of the requirements, the basic requirements are as follows:

  - Create a form that can save the match results(a basic REST server is included in the repo)
  - Display the results in any way that makes sense to you, the repo includes a rudimentry table with non-persistent data
  - Create a panel that shows some basic stats based on the scores(Who has the most wins, the most evenly balanced opponents(eg: Krista and Sarah have almost exactly the same number of wins against each other)
  - Display the dates in a human readable format

### Bonus points for any of the following:
  - Add unit tests for your code, the app is scaffolded with karma, mocha, chai, sinon but you can change this if you have something you're more comfortable with.
  - Make it look good
  - Add more detail to the tracking (eg: track actual scores instead of just wins and losses)
  - Anything else you think would make this fun and help show your skills

### Getting started
Install nodejs if you don't have it already then in terminal: 
```sh
$ npm install -g karma http-server json-server
$ npm install
$ bower install
$ http-server src
```
This installs dependencies and starts at webserver at http://localhost:8080 where you can view the starter app
### Starting the rest server
```sh
$ cp src/db.sample.json db.json
$ npm json-server --watch src/db.json
```
This makes an endpoint available at http://localhost:3000/scores with GET, POST, PUT, DELETE verbs available to be used

### Running tests
```sh
$ npm test
```

Don't hesitate to contact us if you have any questions about the assignment.