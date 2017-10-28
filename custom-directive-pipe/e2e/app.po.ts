import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    // element(by.css('#number1')).sendKeys('11');
    // element(by.xpath('./input[@id="number1"]')).getAttribute('value');
    return element(by.css('app-root h1')).getText();
  }

  EnterNumber1() {
    element(by.css('#n1')).sendKeys(11);
  }

  EnterNumber2() {
    element(by.css('#n2')).sendKeys(22);
  }

  ClickonAdd() {
    element(by.css('#resultButton')).click();
  }

  GetResult() {
    return element(by.css('#result')).getAttribute('value');
  }
}
