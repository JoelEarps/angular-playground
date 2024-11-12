import { createReducer, on } from '@ngrx/store';
import {
  fetchGitInfo,
  fetchGitInfoActionFailure,
  fetchGitInfoActionSuccess,
} from './my-git-info.action';

export interface MyGitInfoState {
  gitInfo: string;
  error: string;
}

const initialState: MyGitInfoState = {
  gitInfo: '',
  error: '',
};

export const myGitInfoReducer = createReducer(
  initialState,
  on(fetchGitInfoActionSuccess, (state, actions) => {
    return {
      ...state,
      gitInfo: actions.gitInfo,
    };
  }),
  on(fetchGitInfoActionFailure, (state, actions) => {
    return {
      ...state,
      gitInfo: '',
      error: actions.error,
    };
  })
);
