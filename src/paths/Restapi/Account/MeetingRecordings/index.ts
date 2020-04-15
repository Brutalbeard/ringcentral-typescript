import ListAccountMeetingRecordingsParameters from '../../../../definitions/ListAccountMeetingRecordingsParameters'
import ListMeetingRecordingsResponse from '../../../../definitions/ListMeetingRecordingsResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/meeting-recordings`
  }

  /**
   * Operation: Get Account Meeting Recordings List
   * Http get /restapi/v1.0/account/{accountId}/meeting-recordings
   */
  async get(queryParams?: ListAccountMeetingRecordingsParameters): Promise<ListMeetingRecordingsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
