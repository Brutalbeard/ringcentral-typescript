/* eslint-env jest */
import RingCentral from '../src/index';

jest.setTimeout(64000);

describe('fax cover pages', () => {
  test('fax cover pages', async () => {
    const rc = new RingCentral({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const faxCoverPages = await rc.restapi().dictionary().faxCoverPage().get();
    expect(faxCoverPages.records?.length).toBeGreaterThan(0);
    expect(faxCoverPages.records?.[0].name).toBe('None');
    await rc.revoke();
  });
});
