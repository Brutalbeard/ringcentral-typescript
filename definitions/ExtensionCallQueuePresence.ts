import CallQueueInfo from './CallQueueInfo'

class ExtensionCallQueuePresence
{
    /**
     * Call queue information
     */
    callQueue: CallQueueInfo

    /**
     * Call queue agent availability for calls of this queue
     */
    acceptCalls: boolean
}

export default ExtensionCallQueuePresence