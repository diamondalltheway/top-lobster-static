import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: './e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 2 : 4,
	reporter: [['list'], ['html', { open: 'never' }]],
	use: {
		baseURL: 'http://127.0.0.1:4174',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
		reducedMotion: 'reduce',
	},
	projects: [
		{ name: 'chromium', use: { ...devices['Desktop Chrome'], reducedMotion: 'reduce' } },
		{ name: 'webkit', use: { ...devices['Desktop Safari'], reducedMotion: 'reduce' } },
	],
	// Run npm run build first: verify the actual static output.
	webServer: {
		command: 'npm run preview -- --host 127.0.0.1 --port 4174 --strictPort',
		url: 'http://127.0.0.1:4174',
		reuseExistingServer: !process.env.CI,
	},
});
