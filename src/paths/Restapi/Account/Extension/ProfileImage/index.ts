import { CreateUserProfileImageRequest, UpdateUserProfileImageRequest } from '../../../../../definitions'
import Utils from '../../../../../Utils'
import Parent from '..'
import RestClient from '../../../../..'

class ProfileImage {
  rc: RestClient
  scaleSize: (string | null)
  parent: Parent

  constructor (parent: Parent, scaleSize: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.scaleSize = scaleSize
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.scaleSize !== null) {
      return `${this.parent.path()}/profile-image/${this.scaleSize}`
    }

    return `${this.parent.path()}/profile-image`
  }

  /**
   * Operation: Get User Profile Image
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async list (): Promise<Buffer> {
    return this.rc.get(this.path(false), undefined, { responseType: 'arraybuffer' })
  }

  /**
   * Operation: Upload User Profile Image
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async post (createUserProfileImageRequest: CreateUserProfileImageRequest): Promise<string> {
    const formData = Utils.getFormData(createUserProfileImageRequest)
    return this.rc.post(this.path(false), formData, undefined, { headers: formData.getHeaders() })
  }

  /**
   * Operation: Update User Profile Image
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image
   */
  async put (updateUserProfileImageRequest: UpdateUserProfileImageRequest): Promise<string> {
    const formData = Utils.getFormData(updateUserProfileImageRequest)
    return this.rc.put(this.path(false), formData, undefined, { headers: formData.getHeaders() })
  }

  /**
   * Operation: Get Scaled User Profile Image
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/profile-image/{scaleSize}
   */
  async get (): Promise<Buffer> {
    if (this.scaleSize === null) {
      throw new Error('scaleSize must be specified.')
    }

    return this.rc.get(this.path(), undefined, { responseType: 'arraybuffer' })
  }
}

export default ProfileImage
