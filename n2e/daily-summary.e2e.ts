import {NightwatchBrowser} from 'nightwatch';
import {Key} from 'protractor';

const URL = 'http://localhost:4200/#/tag/TODAY/daily-summary';
const ADD_TASK_BTN_SEL = '.action-nav > button:first-child';
const ADD_TASK_GLOBAL_SEL = 'add-task-bar.global input';

module.exports = {
  after: (browser: NightwatchBrowser) => {
    browser
      .end();
  },
  'Daily summary message': (browser: NightwatchBrowser) => browser
    .url(URL)
    .waitForElementVisible('.done-headline')
    .assert.containsText('.done-headline', 'Take a moment to celebrate')
    .end(),

  'show any added task in table': (browser: NightwatchBrowser) => browser
    .url(URL)
    .waitForElementVisible(ADD_TASK_BTN_SEL)
    .click(ADD_TASK_BTN_SEL)
    .waitForElementVisible(ADD_TASK_GLOBAL_SEL)

    .setValue(ADD_TASK_GLOBAL_SEL, 'test task hohoho')
    .setValue(ADD_TASK_GLOBAL_SEL, Key.ENTER)

};