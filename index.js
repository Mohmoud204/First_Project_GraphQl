const express = require("express")
const { buildSchema } = require("graphql")
const { graphqlHTTP } = require('express-graphql');
const app = express()
const schema = buildSchema(`
type Query {
  hello:String
}
`)
const resolvers = {
  hello: () => "hello would!"
}
app.use("/", graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }))
app.listen(8080, () => {
  console.log(`localhost:${8080}`)
})