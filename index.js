const express = require("express")
const { buildSchema } = require("graphql")
const { graphqlHTTP } = require('express-graphql');
require("./db.js")
const app = express()
const schema = buildSchema(`
type User {
  name:String!,
  email:String!,
  password:String!
}
input  UserInput {
  name:String!,
  email:String!,
  password: String!
}
type Query {
  test:String
}
type mutation {
  userCreate(input:UserInput):String
}
`)
const query = {}
const mutation = {
  userCreate: async (args) => {
    console.log(args)
    return "ok"
  }
}
const resolvers = {
  ...query,
  ...mutation
}
app.use("/", graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }))
app.listen(8080, () => {
  console.log(`localhost:${8080}`)
})