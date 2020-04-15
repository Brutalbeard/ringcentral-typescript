import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/end`
  }

  /**
   * Operation: End Meeting
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/meeting/{meetingId}/end
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Index
