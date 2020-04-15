import AssignMultipleDevicesAutomaticLocationUpdates from '../../../../../../definitions/AssignMultipleDevicesAutomaticLocationUpdates'
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
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Enable Automatic Location Updates for Devices
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign
   */
  async post(assignMultipleDevicesAutomaticLocationUpdates: AssignMultipleDevicesAutomaticLocationUpdates): Promise<string> {
    return this.rc.post(this.path(), assignMultipleDevicesAutomaticLocationUpdates)
  }
}

export default Index
