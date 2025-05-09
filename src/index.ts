/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const quotes = [
			'The only limit to our realization of tomorrow is our doubts of today.',
			'The future belongs to those who believe in the beauty of their dreams.',
			'Success is not final, failure is not fatal: It is the courage to continue that counts.',
			'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
			'The best way to predict the future is to create it.',
			'You are never too old to set another goal or to dream a new dream.',
			'It does not matter how slowly you go as long as you do not stop.',
			'Your time is limited, so don’t waste it living someone else’s life.',
			'The only way to do great work is to love what you do.',
			'Success usually comes to those who are too busy to be looking for it.',
			'Don’t watch the clock; do what it does. Keep going.',
			'The future depends on what you do today.',
			'Believe you can and you’re halfway there.',
			'Act as if what you do makes a difference. It does.',
			'Success is walking from failure to failure with no loss of enthusiasm.',
			'You miss 100% of the shots you don’t take.',
			'The only place where success comes before work is in the dictionary.',
			'Opportunities don’t happen. You create them.',
			'Success is not how high you have climbed, but how you make a positive difference to the world.',
			'The only way to achieve the impossible is to believe it is possible.',
			'Success is not in what you have, but who you are.',
			'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
			'Success is not about how much money you make, but the difference you make in people’s lives.',
			'Success is not about being the best. It’s about always getting better.',
			'Success is not about what you have, but what you give.',
			'Success is not about what you accomplish in life, but what you inspire others to do.',
			'Success is not about how many times you fall, but how many times you get back up.',
			'Success is not about how fast you run, but how far you go.',
		];
		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
		return new Response(JSON.stringify(randomQuote), { status: 200, headers: { 'Content-Type': 'text/plain' } });
	},
} satisfies ExportedHandler<Env>;
