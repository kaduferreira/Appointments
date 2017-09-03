import { KFMAppointmentsPage } from './app.po';

describe('kfmappointments App', () => {
  let page: KFMAppointmentsPage;

  beforeEach(() => {
    page = new KFMAppointmentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
