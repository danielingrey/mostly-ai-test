# Mostly AI Challenge

This [Node.js](https://nodejs.org/) repository uses Node version 18. The test framework is Playwright.

## Running The Tests

The tests are set to run in Chrome. Playwright should install Chrome if you do not have it installed. The tests are set to display the results in HTML.

```bash
$ npm install # install npm dependencies
$ npm run test # run the playwright tests
```

## Notes

The test is written for "spec 3", however it is currently failing. I think this has something to do with the cookie banner displaying when `hover()` is called on the "Company" link in the nav bar.