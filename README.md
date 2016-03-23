A simple working model of GraphQL with Expressjs and Nodejs

To start the application on port 3000, do 'node start.js'

Get list of users :

Request: curl -X POST http://localhost:3000/graphql -H "Content-Type: application/graphql" -d "{users { name , title }}"

Response: {"data":{"users":[{"name":"Karthik","title":"Backend"},{"name":"Jay","title":"UI"},{"name":"Sushanth","title":"Design"}]}}
