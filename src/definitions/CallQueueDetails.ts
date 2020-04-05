import CallQueueServiceLevelSettings from './CallQueueServiceLevelSettings'

class CallQueueDetails
{
  /**
   * Internal identifier of a call queue
   */
  id?: string

  /**
   * Call queue name
   */
  name?: string

  /**
   * Call queue extension number
   */
  extensionNumber?: string

  /**
   * Call queue status
   * Enum: Enabled, Disabled, NotActivated
   */
  status?: string

  /**
   * Call queue service level settings
   */
  serviceLevelSettings?: CallQueueServiceLevelSettings

  /**
   * Allows members to change their queue status
   */
  editableMemberStatus?: boolean
}

export default CallQueueDetails
