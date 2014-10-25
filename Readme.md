# Tests Highways

Examples of practical tests written in JavaScript and Ruby for learning and practicing purposes.

## Installation

- Download. You need node.js (with npm) and bower
- `[sudo] npm install` that generates a node_modules directory
- `bower install` that generates a vendors directory. It will probably last several minutes

## Usage

See the package.json to see which are the called commands, or run `npm run list` for a custom list command.

- Frontend JS with Jasmine and Karma, e.g. `npm run karma-plain-js-jasmine`
- Backend JS with Jasmine and the jasmine-node module: `npm run jasmine-node`

## Frameworks used

At this point, these JavaScript frameworks and libraries for the source that are being used:

- Frontend: ExtJS, Angular.js
- Backend: Sails.js
- Libraries: Lodash, Q, jQuery.

And the testing frameworks and utilities:

- Unit: Jasmine, Mocha, Sinon, Chai
- Visual: Selenium


## Special cases

In some cases, you must take extra action to run the tests. They are listes here:

- For Sails.js tests, you have to go to the folder you want to test (e.g. `cd src/backend/sails/basic`) and install the modules: `npm install`. After that, you can test it normally: `npm run mocha-sails`

- For ExtJS tests, you must start a server. In the root directory of the project and with another terminal of the one that runs the tests, call `npm run sencha-extjs-server`

- For visual tests it's necessary to have the Selenium ChromeDriver, which you can download here: http://chromedriver.storage.googleapis.com/index.html, along with Ruby and the `selenium-webdriver` gem. It will require that your OS is able to create symbolic links, in particular a `ln -s` for the `vendors` will be automatically created when running them.