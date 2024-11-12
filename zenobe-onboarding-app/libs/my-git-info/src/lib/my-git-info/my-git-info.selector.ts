import { createSelector } from '@ngrx/store';
import { MyGitInfoState } from './my-git-info.reducer';

const selectGitInfo = (state: MyGitInfoState) => state.gitInfo;
const selectError = (state: MyGitInfoState) => state.error;
