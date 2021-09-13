import { EENV } from './enum';

export interface IENV {
  env: EENV.DEV | EENV.PROD | EENV.QA;
}
