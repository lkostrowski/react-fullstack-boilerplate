import { createLogger } from 'redux-logger';

const middlewares = [];
const bannedActions = [];

middlewares.push(createLogger({
    predicate: (getState, action) => !bannedActions.includes(action.type)
        && typeof window === 'undefined',
}));



export default middlewares;
