import Datasets from './Datasets'
import { DataExportTask, CreateDataExportTaskRequest, DataExportTaskList, ListDataExportTasksParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class DataExport {
  rc: RestClient
  taskId: (string | null)
  parent: Parent

  constructor (parent: Parent, taskId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.taskId = taskId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/data-export/${this.taskId}`
    }

    return `${this.parent.path()}/data-export`
  }

  /**
   * Operation: Create Data Export Task
   * Http post /restapi/v1.0/glip/data-export
   */
  async post (createDataExportTaskRequest: CreateDataExportTaskRequest): Promise<DataExportTask> {
    return this.rc.post(this.path(false), createDataExportTaskRequest)
  }

  /**
   * Operation: Get Data Export Task List
   * Http get /restapi/v1.0/glip/data-export
   */
  async list (queryParams?: ListDataExportTasksParameters): Promise<DataExportTaskList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Data Export Task
   * Http get /restapi/v1.0/glip/data-export/{taskId}
   */
  async get (): Promise<DataExportTask> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.')
    }

    return this.rc.get(this.path())
  }

  datasets (datasetId: (string | null) = null): Datasets {
    return new Datasets(this, datasetId)
  }
}

export default DataExport
