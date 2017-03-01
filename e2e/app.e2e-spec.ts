import { VisionCalidadPage } from './app.po';

describe('vision-calidad App', () => {
  let page: VisionCalidadPage;

  beforeEach(() => {
    page = new VisionCalidadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
