import { init } from '@rematch/core';
import middlewares from './middlewares';
import models from './models';

export const initStore = (initialState = {}) => init({
    redux: {
        initialState,
        middlewares,
    },
    models,
});
