class GlipEventCreate
{
  /**
   * Internal identifier of an event
   */
  id?: string

  /**
   * Internal identifier of a person created an event
   */
  creatorId?: string

  /**
   * Event title
   * Required
   */
  title?: string

  /**
   * Datetime of starting an event
   * Required
   */
  startTime?: string

  /**
   * Datetime of ending an event
   * Required
   */
  endTime?: string

  /**
   * Indicates whether event has some specific time slot or lasts for whole day(s)
   */
  allDay?: boolean

  /**
   * Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year
   * Enum: None, Day, Weekday, Week, Month, Year
   */
  recurrence?: string

  /**
   * Condition of ending
   */
  endingCondition?: string

  /**
   * Count of iterations. For periodic events only. Value range is 1 - 10. Must be specified if 'endingCondition' is 'Count'
   */
  endingAfter?: number

  /**
   * Iterations end datetime for periodic events.
   * Default: None
   * Enum: None, Count, Date
   */
  endingOn?: string

  /**
   * Color of Event title (including its presentation in Calendar)
   * Default: Black
   * Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
   */
  color?: string

  /**
   * Event location
   */
  location?: string

  /**
   * Event details
   */
  description?: string
}

export default GlipEventCreate
