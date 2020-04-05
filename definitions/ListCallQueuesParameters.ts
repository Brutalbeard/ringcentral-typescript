class ListCallQueuesParameters
{
    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are accepted
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// Internal identifier of an extension that is a member of every group within the result
    /// </summary>
    memberExtensionId: string
}

export default ListCallQueuesParameters