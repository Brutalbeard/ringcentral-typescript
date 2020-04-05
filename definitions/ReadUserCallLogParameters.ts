class ReadUserCallLogParameters
{
    /**
     * Extension number of a user. If specified, returns call log for a particular extension only
     */
    extensionNumber: string

    /**
     * If 'True' then calls from/to blocked numbers are returned
     * Default: true
     */
    showBlocked: boolean

    /**
     * Phone number of a caller/callee. If specified, returns all calls (both incoming and outcoming) with the phone number specified
     */
    phoneNumber: string

    /**
     * The direction for the resulting records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction: string[]

    /**
     * Internal identifier of a session
     */
    sessionId: string

    /**
     * Call type of a record. It is allowed to specify more than one type. If not specified, all call types are returned. Multiple values are accepted
     */
    type: string[]

    /**
     * Call transport type. 'PSTN' specifies that a call leg is initiated from the PSTN network provider; 'VoIP' - from an RC phone. By default this filter is disabled
     */
    transport: string[]

    /**
     * View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
     * Default: Simple
     * Enum: Simple, Detailed
     */
    view: string

    /**
     * **Deprecated**. Supported for compatibility reasons. `True` if only recorded calls are returned. If both `withRecording` and `recordingType` are specified, then `withRecording` is ignored
     */
    withRecording: boolean

    /**
     * Type of a call recording. If not specified, then calls without recordings are also returned
     * Enum: Automatic, OnDemand, All
     */
    recordingType: string

    /**
     * The end datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo: string

    /**
     * The start datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom: string

    /**
     * Indicates the page number to retrieve. Only positive number values are allowed
     * Default: 1
     */
    page: number

    /**
     * Indicates the page size (number of items)
     * Default: 100
     */
    perPage: number

    /**
     * If 'True' then deleted calls are returned
     */
    showDeleted: boolean
}

export default ReadUserCallLogParameters