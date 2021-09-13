import { EStatus } from './enum';

export interface IStatus {
  status: EStatus.FAILURE | EStatus.SUCCESS;
}
