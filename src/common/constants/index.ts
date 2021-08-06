const env = {
    DEV: "dev",
    QA: "qa",
    PROD: "prod",
};
const status = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
}
const constant = {
    APP: "REACT_APP",
    ...env,
    ...status
};

export { constant };
