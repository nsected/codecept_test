module.exports = async function login(I) {
    I.amOnPage('/signin');
    I.fillField('#email', 'd.mustaev@xsolla.com');
    I.fillField('#password', '');
    I.clickOn('//button[@type="submit"]');
    I.waitForElement('//*[@class="panel-body balance-data"]', 30);
};