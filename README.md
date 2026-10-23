# PlaywrightPractice

A Playwright + TypeScript practice playground. Each spec is a self-contained exercise against a public demo site — locators, web tables, checkboxes, and assertions.

## Tech stack

| Item | Version |
| --- | --- |
| [@playwright/test](https://playwright.dev/docs/intro) | ^1.63.0 |
| TypeScript / Node types | @types/node ^22.20.5 |
| [@playwright/mcp](https://github.com/microsoft/playwright-mcp) | ^0.0.81 |

## Getting started

```bash
# 1. install dependencies
npm ci

# 2. install browser binaries
npx playwright install

# 3. run the whole suite
npx playwright test
```

### Useful commands

```bash
npx playwright test tests/24_Random/myFirstTest.spec.ts   # single file
npx playwright test -g "Bing browser search"              # single test by title
npx playwright test --headed                              # watch the browser
npx playwright test --debug                               # step through with Inspector
npx playwright test --ui                                  # interactive UI mode
npx playwright show-report                                # open the last HTML report
npx playwright codegen https://playwright.dev/            # record a new test
```

## Configuration

See [`playwright.config.ts`](playwright.config.ts):

- `testDir: ./tests`
- `fullyParallel: true` — spec files run in parallel
- Single project: **chromium** with `headless: false`, so runs are visible by default
- `reporter: 'html'` — report written to `playwright-report/`
- `trace: 'on-first-retry'` — view traces with `npx playwright show-trace`
- On CI (`process.env.CI`): `retries: 2`, `workers: 1`, `forbidOnly: true`

## Repository layout

```
PlaywrightPractice/
├── .github/workflows/playwright.yml   # CI: runs the suite, uploads the HTML report
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── tests/
    ├── 00_Challenges/
    │   ├── challenge01.spec.ts         # Applitools demo: sum spent vs earned
    │   └── util.ts                     # spentCalculation() helper
    └── 24_Random/
        ├── amazon.spec.js
        ├── bingSearch.spec.js
        ├── checkCloudQAEmployees.spec.js
        ├── example.spec.ts
        ├── googleSearch.spec.js
        ├── myFirstTest.spec.ts
        ├── tableElement.spec.js
        ├── tableElementCheckBox_InARow.spec.js
        ├── tableElementCheckBox_getByLabel.spec.js
        └── tableMultipleRows_CheckBoxes.spec.js
```

## The tests

### `00_Challenges`

| Spec | Site | What it practises |
| --- | --- | --- |
| `challenge01.spec.ts` | demo.applitools.com | Login form fill, URL assertion, `allTextContents()` over a table column, numeric aggregation in a helper module, `toBeCloseTo` |

### `24_Random`

| Spec | Site | What it practises |
| --- | --- | --- |
| `myFirstTest.spec.ts` | playwright.dev | `toHaveTitle` with regex, `getByRole('heading')` visibility |
| `example.spec.ts` | playwright.dev | The scaffolded starter test — title and "Get started" link |
| `googleSearch.spec.js` | google.com | Basic search box interaction |
| `bingSearch.spec.js` | bing.com | Basic search box interaction |
| `amazon.spec.js` | amazon.in | Navigation on a heavy real-world page |
| `tableElement.spec.js` | awesomeqa.com | Reading a static web table with XPath |
| `checkCloudQAEmployees.spec.js` | thetestingacademy.com | Row/column counting, iterating cells, partitioning rows by value |
| `tableElementCheckBox_InARow.spec.js` | thetestingacademy.com | Checking the box in a specific row |
| `tableElementCheckBox_getByLabel.spec.js` | thetestingacademy.com | Same goal via `getByLabel()` instead of XPath |
| `tableMultipleRows_CheckBoxes.spec.js` | thetestingacademy.com | Selecting several rows by name in one pass |

> Note: these specs hit live third-party sites, so a failure may be a site change or a network issue rather than a broken test. A few specs end with `await page.pause()` for manual inspection — remove it before running unattended or on CI.

## Continuous integration

[`.github/workflows/playwright.yml`](.github/workflows/playwright.yml) runs on every push and pull request to `main` / `master`: installs dependencies, installs browsers with `--with-deps`, runs `npx playwright test`, and uploads `playwright-report/` as an artifact (30-day retention).

## License

[MIT](LICENSE)
