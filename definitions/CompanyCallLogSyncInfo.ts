class CompanyCallLogSyncInfo
{
    /// <summary>
    /// Type of synchronization
    /// Enum: Fsync, ISync
    /// </summary>
    syncType: string

    /// <summary>
    /// Synchronization token
    /// </summary>
    syncToken: string

    /// <summary>
    /// Time of last synchronization in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example *2016-03-10T18:07:52.534Z*
    /// </summary>
    syncTime: string
}

export default CompanyCallLogSyncInfo