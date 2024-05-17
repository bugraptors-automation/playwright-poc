
# My Playwright Project

This project is a demo of how to use Playwright to automate e2e flow for web.

## Prerequisites

To run this project, you will need to have Node.js 
installed on your machine.

## Project Structure
The project structure follows the recommended Playwright project structure:

├── Playwright
│   ├── page-objects
│   │   ├── abc.ts 
│   │   └── xyz.ts
│   ├── tests
│   │   ├── abc.spec.ts
│   │   └── xyz.spec.ts
│   ├── playwright.config.js
├── package.json
├── package-lock.json
└── README.md


## Installation

To install the project, run the following command:

```
npm i

```

## Usage

To run the tests, use the following command:

```
npx playwright test 'filename'
```

This will launch Playwright and run the tests in the `tests` directory.

## Examples

Here are some examples of how to use this project:

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to the Playwright website', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  expect(title).toBe('Playwright');
});
