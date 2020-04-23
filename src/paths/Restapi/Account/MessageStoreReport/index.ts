import Archive from './Archive'
import { CreateMessageStoreReportRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class MessageStoreReport {
  rc: RestClient
  taskId: (string | null)
  parent: Parent

  constructor(parent: Parent, taskId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/message-store-report/${this.taskId}`
    }

    return `${this.parent.path()}/message-store-report`
  }

  /**
   * Operation: Create Message Store Report
   * Http post /restapi/v1.0/account/{accountId}/message-store-report
   */
  async post(createMessageStoreReportRequest: CreateMessageStoreReportRequest): Promise<MessageStoreReport> {
    return this.rc.post(this.path(false), createMessageStoreReportRequest)
  }

  /**
   * Operation: Get Message Store Report Task
   * Http get /restapi/v1.0/account/{accountId}/message-store-report/{taskId}
   */
  async get(): Promise<MessageStoreReport> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.')
    }

    return this.rc.get(this.path())
  }

  archive(archiveId: (string | null) = null): Archive {
    return new Archive(this, archiveId)
  }
}

export default MessageStoreReport
