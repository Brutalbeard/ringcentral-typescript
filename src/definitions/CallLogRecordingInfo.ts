class CallLogRecordingInfo
{
  /**
   * Internal identifier of the call recording
   */
  id?: string

  /**
   * Link to the call recording metadata resource
   */
  uri?: string

  /**
   * Indicates recording mode used
   * Enum: Automatic, OnDemand
   */
  type?: string

  /**
   * Link to the call recording binary content
   */
  contentUri?: string
}

export default CallLogRecordingInfo
