import { constant } from '../constants';

const { REACT_APP_ENV = constant.DEV } = process.env;
const currentEnv = REACT_APP_ENV

export { currentEnv }