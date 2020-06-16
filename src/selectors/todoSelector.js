import { createSelector } from 'reselect';

export const todoSelector = createSelector((state) => state.todo, todos => todos);