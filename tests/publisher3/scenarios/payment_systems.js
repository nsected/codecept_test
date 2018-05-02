Feature('Payment systems list');
Scenario('Payment systems list', async (I, login, vars, maskList) => {
    await require('../publisher_smart_login')(I, login, vars);

    await I.amOnPage(`/${vars.publisher}/matrix`);
    await I.elementTextEquals('.m-b-mini', maskList.digit)
});
