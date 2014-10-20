# Tests Highways

Examples of practical tests written in JavaScript for learning and practicing purposes.

## Installation

- Download. You need node.js (with npm) and bower
- `[sudo] npm install` that generates a node_modules directory
- `bower install` that generates a vendors directory. It will probably last several minutes

## Usage

See the package.json to see which are the called commands, or run `npm run list` for a custom list command.

- Frontend JS with Jasmine and Karma, e.g. `npm run karma-plain-js-jasmine`
- Backend JS with Jasmine and the jasmine-node module: `npm run jasmine-node`

## Frameworks used

At this point, these JavaScript frameworks are being used:

- ExtJS

## Special cases

In some cases, you must take extra action to run the tests. They are listes here:

- For ExtJS tests, you must start a server. In the root directory of the project and with another terminal of the one that runs the tests, call `npm run sencha-extjs-server`
