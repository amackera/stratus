# Stratus

Open-source status utility to report vital system statistics.

# Goals

- Get updates about possible service outage
- Some important system statistics, broken down daily, weekly, monthly
 - Average response time
 - Error rates
- Review historical service outage events

# .plan

- DONE - Basic editable timeline
- DONE - Authentication (Passport.js)
- DONE - User roles and authorization (Connect-roles)
    - This could be better... requires manually updating users in DB shell...
- DONE - REST API for events
- Event updates for admins
- Commenting on events for logged in users
- Multiple projects
    - BADLY NEEDED!
- Automatically tweet when something bad happens
- REST API for analytics
- Show graphs for analytics on client

# Usage

- `npm test` will run the test cases
- `npm start` will run the app, default on port 5000

# Architecture

- Node.js powered server
- Backbone.js powered client
- MongoDB data persistence
- Coffee powered developer
