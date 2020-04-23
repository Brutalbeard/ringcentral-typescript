import { SyncUserCallLogParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class CallLogSync {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/call-log-sync`
  }

  /**
   * Operation: Sync User Call Log
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log-sync
   */
  async get (queryParams?: SyncUserCallLogParameters): Promise<CallLogSync> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default CallLogSync
