import CallQueueInfo from './CallQueueInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class CallQueues
{
    /**
     * Link to a call queues resource
     * Required
     */
    uri: string

    /**
     * List of call queues
     * Required
     */
    records: CallQueueInfo[]

    /**
     * Information on navigation
     * Required
     */
    navigation: ProvisioningNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging: ProvisioningPagingInfo
}

export default CallQueues