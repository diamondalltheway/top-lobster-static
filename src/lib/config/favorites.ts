// Favorites Configuration
// Single source of truth for all favorites data

export interface FavoriteItem {
	name: string;
	subtitle?: string;
}

export interface FavoriteCategory {
	id: string;
	title: string;
	icon: string;
	itemIcon: string;
	subtitleIcon?: string;
	color: string;
	items: FavoriteItem[];
}

export interface GoatConfig {
	title: string;
	icon: string;
	color: string;
	content: string;
}

export interface FavoritesConfig {
	categories: FavoriteCategory[];
	goat: GoatConfig;
}

export const favoritesConfig: FavoritesConfig = {
	categories: [
		{
			id: 'books',
			title: 'Favorite Books',
			icon: '📚',
			itemIcon: '📖',
			subtitleIcon: '✍️',
			color: 'text-green-300',
			items: [
				{ name: 'The Little Prince', subtitle: 'Antoine de Saint-Exupéry' },
				{ name: '12 Rules for Life', subtitle: 'Jordan B. Peterson' },
				{ name: 'Hard Thing About Hard Things', subtitle: 'Ben Horowitz' },
				{ name: 'Zero to One', subtitle: 'Peter Thiel' },
				{ name: 'Rework', subtitle: 'Jason Fried • David Heinemeier Hanson' },
				{ name: 'Delivering Happiness', subtitle: 'Tony Hsieh' },
				{ name: 'The Launch Pad: Inside Y Combinator', subtitle: 'Randal Stross' },
				{ name: 'Remote', subtitle: 'Jason Fried • David Heinemeier Hanson' },
				{ name: 'Shoe Dog', subtitle: 'Phil Knight' },
				{ name: 'Crazy Love', subtitle: 'Francis Chan' },
				{ name: 'Tocqueville and the American Experiment', subtitle: 'William R. Cook' },
				{ name: 'Extreme Ownership', subtitle: 'Jocko Wilink • Leif Babin' },
				{ name: 'Outliers', subtitle: 'Malcom Gladwell' },
				{ name: 'David and Goliath', subtitle: 'Malcom Gladwell' },
				{ name: 'A New Grammar Reference of Modern Spanish', subtitle: 'John Butt • Carmen Benjamin' }
			]
		},
		{
			id: 'movies',
			title: 'Favorite Movies',
			icon: '🍿',
			itemIcon: '🎥',
			color: 'text-green-400',
			items: [
				{ name: "You've Got Mail" },
				{ name: 'Interstellar' },
				{ name: 'Blood Diamond' },
				{ name: 'Angels in the Outfield' },
				{ name: 'Lord of the Rings (Trilogy)' },
				{ name: 'Gangs of New York' },
				{ name: '100 Foot Journey' },
				{ name: 'The Matrix' },
				{ name: 'Training Day' },
				{ name: 'Catch Me If You Can' }
			]
		},
		{
			id: 'shows',
			title: 'Favorite TV Shows',
			icon: '🎬',
			itemIcon: '📺',
			color: 'text-green-500',
			items: [
				{ name: 'Severance' },
				{ name: 'Suits' },
				{ name: "That 70's Show" },
				{ name: 'Body Guard' },
				{ name: 'Line of Duty' },
				{ name: 'Dexter' },
				{ name: 'Cheers' },
				{ name: 'Yu Yu Hakusho' },
				{ name: 'True Detective' },
				{ name: 'Fargo' }
			]
		},
		{
			id: 'places',
			title: 'Favorite Places on Earth',
			icon: '🌎',
			itemIcon: '📍',
			subtitleIcon: '⭐️',
			color: 'text-green-600',
			items: [
				{ name: 'The Woodlands, Texas', subtitle: "I'm a hometown kind of guy" },
				{ name: 'Tenerife, Spain', subtitle: 'Incredible amount of microclimates' },
				{ name: 'Medellín, Colombia', subtitle: 'Lived here for 6 years' },
				{ name: 'Santa Fé de Antioquia, Colombia', subtitle: 'Perfectly slow pace of life' },
				{ name: 'Denver, Colorado', subtitle: 'Lived here for a year, Rocky Mountain Air' },
				{ name: 'Papagayo, Costa Rica', subtitle: 'Great family memories' },
				{ name: 'Rome, Italy', subtitle: 'If Rome can fall, nothing is forever' },
				{ name: 'Maui, Hawaii', subtitle: 'Never been more relaxed' },
				{ name: 'Nassau, Bahamas', subtitle: 'More fond family memories' },
				{ name: 'Cusco, Peru', subtitle: 'Ancient' },
				{ name: 'Lima, Peru', subtitle: 'Ceviche' },
				{ name: 'Florence, Italy', subtitle: 'Refreshing taste of craftsmanship' },
				{ name: 'San Pedro de Atacama, Chile', subtitle: 'Surreal landscapes' },
				{ name: 'Kauai, Hawaii', subtitle: 'Classic family memories' },
				{ name: 'Grand Cayman, Cayman Islands', subtitle: 'Islands are easy to love, stringrays!' },
				{ name: 'Lübbecke, Germany', subtitle: 'First taste of Europe' },
				{ name: 'Jardín, Colombia', subtitle: "Named 'Garden' in Spanish for its beauty" },
				{ name: 'Madrid, Spain', subtitle: 'All around underrated' },
				{ name: 'Granada, Spain', subtitle: 'Creativity that inspires' },
				{ name: 'Paracas, Perú', subtitle: 'Animals all over the place' },
				{ name: 'Valle de Corcoa, Colombia', subtitle: 'Tallest palm trees in the world' },
				{ name: 'Villa de Leyva, Colombia', subtitle: 'Great mix of relaxation + things to do' },
				{ name: 'Santa Marta, Colombia', subtitle: 'Major fan of Parque Tayrona' },
				{ name: 'El Retiro, Colombia', subtitle: 'Classic mountain town of Antioquia' },
				{ name: 'Cartagena, Colombia', subtitle: 'Historic Caribbean city' }
			]
		}
	],
	goat: {
		title: 'Greatest of All Time',
		icon: '🏀',
		color: 'text-green-700',
		content: 'Jordan. 🏆 🏆 🏆 🏆 🏆 🏆'
	}
};
