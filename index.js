import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { games, authors, reviews } from "./database.js";

const resolvers = {
	Query: {
		games : () => games,
		reviews : () => reviews,
		authors : () => authors,

		game: (_, {id}) => {
			return games.find(game => game.id === id);
		},
		review: (_, { id }) => {
			return reviews.find(review => review.id === id);
		},
		author: (_, { id }) => {
			return authors.find(author => author.id === id);
		}
	},
	Game: {
		reviews: (parent) => {
			return reviews.filter(review => review.game.id === parent.id);
		}
	},
	Author: {
		reviews: (parent) => {
			return reviews.filter(review => review.author.id === parent.id);
		}
	},
	Review: {
		game: (parent) => {
			return games.find(game => game.id === parent.game.id);
		},
		author: (parent) => {
			return authors.find(author => author.id === parent.author.id);
		}
	},
	Mutation: {
		deleteGame: (_, { id }) => {
			const gameIndex = games.findIndex(game => game.id === id);
			if (gameIndex === -1) {
				throw new Error('Game not found');
			}
			const deletedGame = games.splice(gameIndex, 1);
			return deletedGame[0];
		},
		addGame: (_, {title, platform}) => {
			const newGame = {
				id: String(games.length + 1),
				title,
				platform
			};
			games.push(newGame);
			return newGame;
		},
		updateGame: (_, {id, title, platform}) => {
			const gameIndex = games.findIndex(game => game.id === id);
			if (gameIndex === -1) {
				throw new Error('Game not found');
			}
			const updatedGame = {
				...games[gameIndex],
				title: title || games[gameIndex].title,
				platform: platform || games[gameIndex].platform
			};
			games[gameIndex] = updatedGame;
			return updatedGame;
		}
	}
}

const server = new ApolloServer({
	// typedefs
	typeDefs,
	// resolvers
	resolvers
});

const {url} = await startStandaloneServer(server, {
	  listen: { port: 4000 },
});

console.log('🚀  Server ready at: ' + url);