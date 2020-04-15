import CreateCompanyGreetingRequest from '../../../../definitions/CreateCompanyGreetingRequest'
import CustomCompanyGreetingInfo from '../../../../definitions/CustomCompanyGreetingInfo'
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
    return `${this.parent.path()}/greeting`
  }

  /**
   * Operation: Create Company Greeting
   * Http post /restapi/v1.0/account/{accountId}/greeting
   */
  async post(createCompanyGreetingRequest: CreateCompanyGreetingRequest): Promise<CustomCompanyGreetingInfo> {
    var multipartFormDataContent = Utils.GetMultipartFormDataContent(createCompanyGreetingRequest)
    return this.rc.post(this.path(), multipartFormDataContent)
  }
}

export default Index
