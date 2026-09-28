import type { MessageKey } from '$lib/i18n';

export interface FavoriteItem {
	nameKey: MessageKey;
	subtitle?: string;
	subtitleKey?: MessageKey;
}
export interface FavoriteCategory {
	id: string;
	titleKey: MessageKey;
	icon: string;
	itemIcon: string;
	items: FavoriteItem[];
}
export interface GoatConfig {
	titleKey: MessageKey;
	icon: string;
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
			icon: '📚',
			itemIcon: '📖',
			titleKey: 'favorites.books.title',
			items: [
				{
					nameKey: 'favorites.books.littlePrince',
					subtitle: 'Antoine de Saint-Exupéry',
				},
				{
					nameKey: 'favorites.books.rules',
					subtitle: 'Jordan B. Peterson',
				},
				{
					nameKey: 'favorites.books.hardThings',
					subtitle: 'Ben Horowitz',
				},
				{
					nameKey: 'favorites.books.zeroToOne',
					subtitle: 'Peter Thiel',
				},
				{
					nameKey: 'favorites.books.rework',
					subtitle: 'Jason Fried • David Heinemeier Hanson',
				},
				{
					nameKey: 'favorites.books.happiness',
					subtitle: 'Tony Hsieh',
				},
				{
					nameKey: 'favorites.books.launchPad',
					subtitle: 'Randal Stross',
				},
				{
					nameKey: 'favorites.books.remote',
					subtitle: 'Jason Fried • David Heinemeier Hanson',
				},
				{
					nameKey: 'favorites.books.shoeDog',
					subtitle: 'Phil Knight',
				},
				{
					nameKey: 'favorites.books.crazyLove',
					subtitle: 'Francis Chan',
				},
				{
					nameKey: 'favorites.books.tocqueville',
					subtitle: 'William R. Cook',
				},
				{
					nameKey: 'favorites.books.ownership',
					subtitle: 'Jocko Wilink • Leif Babin',
				},
				{
					nameKey: 'favorites.books.outliers',
					subtitle: 'Malcom Gladwell',
				},
				{
					nameKey: 'favorites.books.davidGoliath',
					subtitle: 'Malcom Gladwell',
				},
				{
					nameKey: 'favorites.books.grammar',
					subtitle: 'John Butt • Carmen Benjamin',
				},
			],
		},
		{
			id: 'movies',
			icon: '🍿',
			itemIcon: '🎥',
			titleKey: 'favorites.movies.title',
			items: [
				{
					nameKey: 'favorites.movies.mail',
				},
				{
					nameKey: 'favorites.movies.interstellar',
				},
				{
					nameKey: 'favorites.movies.diamond',
				},
				{
					nameKey: 'favorites.movies.angels',
				},
				{
					nameKey: 'favorites.movies.rings',
				},
				{
					nameKey: 'favorites.movies.gangs',
				},
				{
					nameKey: 'favorites.movies.journey',
				},
				{
					nameKey: 'favorites.movies.matrix',
				},
				{
					nameKey: 'favorites.movies.training',
				},
				{
					nameKey: 'favorites.movies.catch',
				},
			],
		},
		{
			id: 'shows',
			icon: '🎬',
			itemIcon: '📺',
			titleKey: 'favorites.shows.title',
			items: [
				{
					nameKey: 'favorites.shows.severance',
				},
				{
					nameKey: 'favorites.shows.suits',
				},
				{
					nameKey: 'favorites.shows.seventies',
				},
				{
					nameKey: 'favorites.shows.bodyguard',
				},
				{
					nameKey: 'favorites.shows.lineOfDuty',
				},
				{
					nameKey: 'favorites.shows.dexter',
				},
				{
					nameKey: 'favorites.shows.cheers',
				},
				{
					nameKey: 'favorites.shows.yuyu',
				},
				{
					nameKey: 'favorites.shows.trueDetective',
				},
				{
					nameKey: 'favorites.shows.fargo',
				},
			],
		},
		{
			id: 'places',
			icon: '🌎',
			itemIcon: '📍',
			titleKey: 'favorites.places.title',
			items: [
				{
					nameKey: 'favorites.places.woodlands',
					subtitleKey: 'favorites.places.woodlands.note',
				},
				{
					nameKey: 'favorites.places.tenerife',
					subtitleKey: 'favorites.places.tenerife.note',
				},
				{
					nameKey: 'favorites.places.medellin',
					subtitleKey: 'favorites.places.medellin.note',
				},
				{
					nameKey: 'favorites.places.santaFe',
					subtitleKey: 'favorites.places.santaFe.note',
				},
				{
					nameKey: 'favorites.places.denver',
					subtitleKey: 'favorites.places.denver.note',
				},
				{
					nameKey: 'favorites.places.papagayo',
					subtitleKey: 'favorites.places.papagayo.note',
				},
				{
					nameKey: 'favorites.places.rome',
					subtitleKey: 'favorites.places.rome.note',
				},
				{
					nameKey: 'favorites.places.maui',
					subtitleKey: 'favorites.places.maui.note',
				},
				{
					nameKey: 'favorites.places.nassau',
					subtitleKey: 'favorites.places.nassau.note',
				},
				{
					nameKey: 'favorites.places.cusco',
					subtitleKey: 'favorites.places.cusco.note',
				},
				{
					nameKey: 'favorites.places.lima',
					subtitleKey: 'favorites.places.lima.note',
				},
				{
					nameKey: 'favorites.places.florence',
					subtitleKey: 'favorites.places.florence.note',
				},
				{
					nameKey: 'favorites.places.atacama',
					subtitleKey: 'favorites.places.atacama.note',
				},
				{
					nameKey: 'favorites.places.kauai',
					subtitleKey: 'favorites.places.kauai.note',
				},
				{
					nameKey: 'favorites.places.cayman',
					subtitleKey: 'favorites.places.cayman.note',
				},
				{
					nameKey: 'favorites.places.lubbecke',
					subtitleKey: 'favorites.places.lubbecke.note',
				},
				{
					nameKey: 'favorites.places.jardin',
					subtitleKey: 'favorites.places.jardin.note',
				},
				{
					nameKey: 'favorites.places.madrid',
					subtitleKey: 'favorites.places.madrid.note',
				},
				{
					nameKey: 'favorites.places.granada',
					subtitleKey: 'favorites.places.granada.note',
				},
				{
					nameKey: 'favorites.places.paracas',
					subtitleKey: 'favorites.places.paracas.note',
				},
				{
					nameKey: 'favorites.places.cocora',
					subtitleKey: 'favorites.places.cocora.note',
				},
				{
					nameKey: 'favorites.places.leyva',
					subtitleKey: 'favorites.places.leyva.note',
				},
				{
					nameKey: 'favorites.places.santaMarta',
					subtitleKey: 'favorites.places.santaMarta.note',
				},
				{
					nameKey: 'favorites.places.retiro',
					subtitleKey: 'favorites.places.retiro.note',
				},
				{
					nameKey: 'favorites.places.cartagena',
					subtitleKey: 'favorites.places.cartagena.note',
				},
			],
		},
	],
	goat: {
		titleKey: 'favorites.goat',
		icon: '🏀',
		content: 'Jordan. 🏆 🏆 🏆 🏆 🏆 🏆',
	},
};
