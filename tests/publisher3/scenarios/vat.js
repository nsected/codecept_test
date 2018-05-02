Feature('VAT Statistics');
Scenario('VAT Statistics', async (I, login, vars, maskList) => {
    await require('../publisher_smart_login')(I, login, vars);

    await I.amOnPage(`/${vars.publisher}/analytics/vat`);
    await I.elementTextEquals('.data-table td', maskList.any_word)
});
