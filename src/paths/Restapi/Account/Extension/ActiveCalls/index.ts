import { UserActiveCallsResponse, ListExtensionActiveCallsParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class ActiveCalls {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/active-calls`
  }

  /**
   * Operation: Get User Active Calls
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls
   */
  async get (queryParams?: ListExtensionActiveCallsParameters): Promise<UserActiveCallsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default ActiveCalls
