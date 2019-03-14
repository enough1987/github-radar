Apollo Server
==============

`apollo-server`
<blockquote> 
The Apollo Server library which allos you to focus on deining the shape of your data and how to fetch it.
</blockquote>

`graphql`
<blockquote>
The library used to build a chema and to execute queries on that schema.
</blockquote>

Demos:
-------

- `app1.js`:

[Stand-alone Apollo GraphQL Server](https://www.apollographql.com/docs/apollo-server/getting-started.html)

```bash
$ nodemon app1.js
$ open localhost:4000/
```

using the GraphQL Playground:
```javascript
{
    books {
        title
        author
    }
}
```

- `app2.js`

[Apollo integrated with Express](https://github.com/apollographql/apollo-server)

```javascript
const server = new ApolloServer({ typeDefs, resolvers})
const app = express()
server.applyMiddleware({app})
```

- `app3.js`

Rest API call from `https://fourtonfish.com/`

- `app4.js`

Automatic Persisted Queries `apollo-server-cache-memcached`


- CDN Integration

Apollo Server works well with a Content-Distribution Network to cache full GraphQL query results. Apollo Server provides cache-control headers that a CDN uses to determine how long a request should be cached. For subsequent requests, the result will be served directly from the CDN’s cache. A CDN paired with Apollo Server’s persisted queries is especially powerful, since GraphQL operations can be shortened and sent with a HTTP GET request. To enable caching and a CDN in Apollo Server, follow the Performance Guide.

Apollo Client
=============


