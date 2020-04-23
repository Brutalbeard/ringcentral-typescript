import { UserCallLogResponse, ReadUserCallLogParameters, DeleteUserCallLogParameters, UserCallLogRecord, ReadUserCallRecordParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class CallLog {
  rc: RestClient
  callRecordId: (string | null)
  parent: Parent

  constructor (parent: Parent, callRecordId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.callRecordId = callRecordId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.callRecordId !== null) {
      return `${this.parent.path()}/call-log/${this.callRecordId}`
    }

    return `${this.parent.path()}/call-log`
  }

  /**
   * Operation: Get User Call Log Records
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async list (queryParams?: ReadUserCallLogParameters): Promise<UserCallLogResponse> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Delete User Call Log
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log
   */
  async delete (queryParams?: DeleteUserCallLogParameters): Promise<string> {
    return this.rc.delete(this.path(false), queryParams)
  }

  /**
   * Operation: Get User Call Record
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-log/{callRecordId}
   */
  async get (queryParams?: ReadUserCallRecordParameters): Promise<UserCallLogRecord> {
    if (this.callRecordId === null) {
      throw new Error('callRecordId must be specified.')
    }

    return this.rc.get(this.path(), queryParams)
  }
}

export default CallLog
