import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	reporter: 'html',
	webServer: {
		command: process.env.CI ? 'npm run build && npm run preview' : 'pnpm run dev',
		url: process.env.CI ? 'http://localhost:4173' : 'http://localhost:5173',
		reuseExistingServer: !process.env.CI,
		timeout: 120 * 1000
	},
	use: {
		baseURL: process.env.CI ? 'http://localhost:4173' : 'http://localhost:5173',
		trace: 'on-first-retry'
	}
};

export default config;
