import type { MessageKey } from '$lib/i18n';

export interface Testimonial {
	id: string;
	author: string;
	company: string;
	image: string;
	textKey: MessageKey;
	badgeKey: MessageKey;
}

export const testimonials: Testimonial[] = [
	{
		id: 'david',
		author: 'David Montes',
		company: 'AfterLib',
		image: 'david-montes.jpg',
		textKey: 'testimonials.david',
		badgeKey: 'employment.contract',
	},
	{
		id: 'sacha',
		author: 'Sacha Dumay',
		company: 'Chatnode.ai',
		image: 'sacha.jpg',
		textKey: 'testimonials.sacha',
		badgeKey: 'employment.fullTime',
	},
	{
		id: 'michael',
		author: 'Michael Makedonsky',
		company: 'Agatha Global Tech',
		image: '/michael.png',
		textKey: 'testimonials.michael',
		badgeKey: 'employment.contract',
	},
	{
		id: 'josh',
		author: 'Josh Yang',
		company: 'MLytica',
		image: 'josh.jpg',
		textKey: 'testimonials.josh',
		badgeKey: 'employment.contract',
	},
	{
		id: 'alonso',
		author: 'Alonso Lobato',
		company: 'StruCalc',
		image: 'alonso-lobato.jpg',
		textKey: 'testimonials.alonso',
		badgeKey: 'employment.fullTime',
	},
	{
		id: 'colin',
		author: 'Colin White',
		company: 'StruCalc',
		image: 'colin-white.jpg',
		textKey: 'testimonials.colin',
		badgeKey: 'employment.fullTime',
	},
];
