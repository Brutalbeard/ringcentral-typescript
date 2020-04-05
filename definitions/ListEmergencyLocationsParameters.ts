class ListEmergencyLocationsParameters
{
    /**
     * Filters entries containing the specified substring in address fields. The characters range is 0-64; not case-sensitive. If empty then the filter is ignored
     */
    searchString: string

    /**
     * Comma-separated list of fields to order results prefixed by plus sign '+' (ascending order) or minus sign '-' (descending order). Supported values: 'address'
     * Default: address
     */
    orderBy: string

    /**
     * Indicates the page size (number of items). The values supported: `Max` or numeric value. If not specified, 100 records are returned per one page
     */
    perPage: number

    /**
     * Indicates the page number to retrieve. Only positive number values are supported
     * Default: 1
     */
    page: number
}

export default ListEmergencyLocationsParameters