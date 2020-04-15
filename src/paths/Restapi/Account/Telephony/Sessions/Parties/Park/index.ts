import CallParty from '../../../../../../../definitions/CallParty'
import Parent from '..'
import RestClient from '../../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/park`
  }

  /**
   * Operation: Call Park
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park
   */
  async post(): Promise<CallParty> {
    return this.rc.post(this.path())
  }
}

export default Index
