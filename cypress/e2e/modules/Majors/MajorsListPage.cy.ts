import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
// import { MajorsListTestFunctions } from 'cypress/utils/modules/Majors/MajorsListTestFunctions';

// const MajorsListPage = new MajorsListTestFunctions();
const Header = new HeaderTestFunctions();

describe('MajorsListPage', () => {
  beforeEach(() => {
    cy.viewport(1080, 1920);
    cy.visit('/majors');
  });

  // TODO - test page when requests are sent to API

  // it.only('render content PL', () => {
  //   Header.testHeaderContentPL();
  //   MajorsListPage.testMajorsListContentPL();
  // });

  it.only('render content EN', () => {
    Header.testHeaderContentEN();
    // TODO - english version
  });

  // it.only('request pending', () => {
  //   Header.testHeaderContentPL();
  //   MajorsListPage.testMajorsListContentPendingStatus();
  // });

  // it.only('get request error', () => {
  //   Header.testHeaderContentPL();
  //   MajorsListPage.testMajorsListContentOnRequestError();
  // });
});