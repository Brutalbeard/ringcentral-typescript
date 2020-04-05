class SyncAccountCallLogParameters
{
  /**
   * Type of synchronization. 'FSync' is a default value
   * Enum: FSync, ISync
   */
  syncType?: string[]

  /**
   * Value of syncToken property of last sync request response
   */
  syncToken?: string

  /**
   * The start datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601]  format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is the current moment
   */
  dateFrom?: string

  /**
   * For 'FSync' the parameter is mandatory, it limits the number of records to be returned in response. For 'ISync' it specifies with how many records to extend sync frame to the past, the maximum number of records is 250
   */
  recordCount?: number

  /**
   * Type of calls to be returned.
   * Enum: Missed, All
   */
  statusGroup?: string[]

  /**
   * View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
   * Default: Simple
   * Enum: Simple, Detailed
   */
  view?: string

  /**
   * Supported for ISync. If 'True' then deleted call records are returned
   */
  showDeleted?: boolean
}

export default SyncAccountCallLogParameters
