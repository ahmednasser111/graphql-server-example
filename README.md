# GraphQL Server Example

This project is a simple GraphQL server built using Apollo Server. It demonstrates how to define a schema, resolvers, and manage mock data for a GraphQL API.

## Features

- Query games, reviews, and authors.
- Perform mutations to add, update, or delete games, reviews, and authors.
- Relationships between games, reviews, and authors.

## Installation

1. Clone the repository:
	```bash
	git clone https://github.com/your-repo/graphql-server-example.git
	cd graphql-server-example
	```

2. Install dependencies:
	```bash
	npm install
	```

## Usage

1. Start the server:
	```bash
	npm start
	```

2. Access the GraphQL Playground at [http://localhost:4000](http://localhost:4000).

## Project Structure

- **index.js**: Entry point of the application. Sets up the Apollo Server and defines resolvers.
- **schema.js**: Defines the GraphQL schema.
- **database.js**: Contains mock data for games, reviews, and authors.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **package.json**: Project metadata and dependencies.

## Example Queries

### Query All Games
```graphql
query {
  games {
    id
    title
    platform
    reviews {
      id
      content
    }
  }
}
```

### Query All Reviews
```graphql
query {
  reviews {
    id
    rating
    content
    game {
      title
    }
    author {
      name
      verified
    }
  }
}
```

### Add a New Game
```graphql
mutation {
  addGame(title: "New Game", platform: ["PC", "Xbox"]) {
    id
    title
    platform
  }
}
```

## Dependencies

- `@apollo/server`: Apollo Server for building GraphQL APIs.
- `graphql`: GraphQL JavaScript reference implementation.
- `nodemon`: Utility for automatically restarting the server during development.

## License

This project is licensed under the ISC License.