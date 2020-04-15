import ListExtensionGrantsParameters from '../../../../../definitions/ListExtensionGrantsParameters'
import GetExtensionGrantListResponse from '../../../../../definitions/GetExtensionGrantListResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/grant`
  }

  /**
   * Operation: Get Extension Grant List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant
   */
  async get(queryParams?: ListExtensionGrantsParameters): Promise<GetExtensionGrantListResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
