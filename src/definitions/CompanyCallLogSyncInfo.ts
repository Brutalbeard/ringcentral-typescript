class CompanyCallLogSyncInfo {
  /**
   * Type of synchronization
   */
  syncType?: ('Fsync' | 'ISync')

  /**
   * Synchronization token
   */
  syncToken?: string

  /**
   * Time of last synchronization in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example *2016-03-10T18:07:52.534Z*
   */
  syncTime?: string
}

export default CompanyCallLogSyncInfo
