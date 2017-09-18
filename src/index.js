import express from "express";
import graphqlHTTP from "express-graphql";

import { GraphQLSchema } from "graphql";
import { RootQueryType } from "./types/root-query";

const PORT = process.env.GQLPORT || 4000;

const app = express();

const schema = new GraphQLSchema({
	query: RootQueryType,
});

app.use("/", graphqlHTTP({
	schema,
	graphiql: true
}));

const server = app.listen(PORT, () => {
	// eslint-disable-next-line
	console.log(`listening on port:${PORT}`);
});

module.exports = server;
