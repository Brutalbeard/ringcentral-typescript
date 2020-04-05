class GlipWebhookInfo
{
    /**
     * Internal identifier of a webhook
     */
    id: string

    /**
     * Internal identifier of the user who created a webhook
     */
    creatorId: string

    /**
     * Internal identifiers of groups where a webhook has been created
     */
    groupIds: string[]

    /**
     * Webhook creation time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
     */
    creationTime: string

    /**
     * Webhook last update time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
     */
    lastModifiedTime: string

    /**
     * Public link to send a webhook payload
     */
    uri: string

    /**
     * Current status of a webhook
     * Enum: Active, Suspended, Deleted
     */
    status: string
}

export default GlipWebhookInfo