class UpdateForwardingNumberRequest
{
  /**
   * Forwarding/Call flip phone number
   */
  phoneNumber?: string

  /**
   * Forwarding/Call flip number title
   */
  label?: string

  /**
   * Number assigned to the call flip phone number, corresponds to the shortcut dial number
   */
  flipNumber?: string

  /**
   * Forwarding phone number type
   * Enum: Home, Mobile, Work, PhoneLine, Outage, Other
   */
  type?: string
}

export default UpdateForwardingNumberRequest
