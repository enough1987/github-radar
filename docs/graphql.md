GraphQL
--------

- GraphQL APIs are extremely flexible, because you can layer them on top of any service, including any business logic, REST APIs, databases, or gRPC service.
- Apollo makes these services to your graph simple with our data source API:
fetch, caching, deduplication (重复数据删除)


Apollo
-------

- Apollo is GraphQL gateway
- Apollo is query execution engine
- a combination of open source components, commercial extensions, and cloud services

1. Apollo Server

`Apollo Server` is a JavaScript GraphQL server for defining a schema and a set of resolvers that implment each part of that `schema`.
Typically Apollo Server is extensible: plugs can hook in to each stage of the request pipeline and server's own lifecycle, makeing it possible to implement custom behaviors
in add-on packages. Apollo Server supports AWS Lambada and other serverless environments.

1. Apollo Client

`Apollo Client` is a sophisticated GraphQL client that manages sR NS ARrw in an application. Among other benefits, 
it enables a declarative programming style that lets developers define queries as part of UI components; 
the client manages all the hairy details of binding query results to the UI, managing consitenc, caching, and so on. 
Apollo Client also supports an exceptionally elegant (格外优雅) approach to state management by extending the GraphQL schema inside the client with additional structure.
Apollo Client includes integrations for React, React Native, Vue, Angular and other view layers.


If you want to bind your JS GraphQL schema to an HTTP server, we recommend to use `Apollo Server`, which supports every popular Node HTTP server library including Express, HApi, and more.

JS GraphQL servers are often developed with `graphql-tools` and `apollo-server-express` together: 1 to write the schema and resolver code, and the other to connect it to a web server.


Apollo GraphQL
----------------


Schema
-------

Since a schema sits in between your clients and underlying services, it serves as a perfect middle ground
for frontend and backend teams to collaborate. We recommend that teams practice `schema First Development` 
and agree upon the schema first before any API development begins.

- SDL - GraphQL's schema definition language
- Scalar type is a primitive type like ID, String, Boolean or Int. GraphQL has many scalars built in, 
and you can also define custom scalars like Date.
- introspection 内省 is a technique used to provide detailed information about a graph's schema.


apollo-datasource-rest: partial query caching
database: SQLite

resolver - Resolvers provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data.
They either return the same type of data we specify in our schema or a promise for that data.


- The `Query` type
`GET`

- The `Mutation` type
Mutations are operations sent to the server to create, update or delete data. These are comparable to the `PUT`, `POST`, `PATCH` and `DELETE` verbs on `REST-based` APIs.
