export const games = [
	{
		id: "1",
		title: "The Legend of Zelda: Breath of the Wild",
		platform: ["Nintendo Switch"],
	},
	{
		id: "2",
		title: "God of War",
		platform: ["PlayStation 4", "PlayStation 5"],
	},
	{
		id: "3",
		title: "Minecraft",
		platform: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
	}
];

export const reviews = [
	{
		id: "1",
		rating: 5,
		content: "An amazing game with breathtaking visuals and gameplay!",
		game: { id: "1" },
		author: { id: "1" }
	},
	{
		id: "2",
		rating: 4,
		content: "Great story and mechanics, but could use some polish.",
		game: { id: "2" },
		author: { id: "2" }
	},
	{
		id: "3",
		rating: 3,
		content: "Fun for a while, but gets repetitive.",
		game: { id: "3" },
		author: { id: "3" }
	}
];

export const authors = [
	{
		id: "1",
		name: "John Doe",
		verified: true,
	},
	{
		id: "2",
		name: "Jane Smith",
		verified: false,
	},
	{
		id: "3",
		name: "Alice Johnson",
		verified: true,
	}
];