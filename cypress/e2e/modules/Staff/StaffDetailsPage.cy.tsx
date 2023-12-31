import { HeaderTestFunctions } from 'cypress/utils/Header/HeaderTestFunctions';
import { StaffDetailsTestFunctions } from 'cypress/utils/modules/StaffPage/StaffDetailsTestFunctions';
import { NavbarTestFunctions } from 'cypress/utils/Navbar/NavbarTestFunctions';

const Header = new HeaderTestFunctions();
const StaffDetails = new StaffDetailsTestFunctions();
const Navbar = new NavbarTestFunctions();

describe('StaffDetailsPage.cy.tsc', () => {
  // let's skip this test for now
  // it('should render skeleton', () => {
  //   cy.visit('/staff/63cb1cf20ada513d831bc83d');
  //   StaffDetails.testDetailsContentPendingStatus();
  // });

  it('should render error-message', () => {
    cy.visit('/staff/63cb1cf20ada513d831bc83d');
    StaffDetails.testDetailsContentOnRequestError();
    Header.testHeaderContentPL();
    Navbar.testNavbarContent();
  });

  // let's skip these tests for now
  // it('should render the staff detail page in Polish without tutorial', () => {
  //   StaffDetails.testDetailsWithoutTutorialPL();
  //   Header.testHeaderContentPL();
  // });

  // it('should render the staff detail page in English option without tutorial', () => {
  //   StaffDetails.testDetailsWithTutorialEN();
  //   Header.testHeaderContentEN();
  // });

  // it('should render the staff detail page in Polish option with tutorial', () => {
  //   StaffDetails.testDetailsWithTutorialPL();
  //   Header.testHeaderContentPL();
  // });

  // it('should render the staff detail page in English option with tutorial', () => {
  //   Header.testHeaderContentEN();
  //   StaffDetails.testDetailsWithTutorialEN();
  // });
});
