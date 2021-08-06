import { constants } from 'common';

const { REACT_APP_ENV = constants.DEV } = process.env;
const currentEnv = (): string => REACT_APP_ENV;
export { currentEnv };
