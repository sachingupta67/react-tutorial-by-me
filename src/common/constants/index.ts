const env = {
  DEV: 'dev',
  QA: 'qa',
  PROD: 'prod',
};
const status = {
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};
const constants = {
  APP: 'REACT_APP',
  ...env,
  ...status,
};

export { constants };
