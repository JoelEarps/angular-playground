import {
  createSelector,
  createFeatureSelector,
  createFeature,
} from '@ngrx/store';
import { myGitInfoReducer, MyGitInfoState } from './my-git-info.reducer';

const gitInfoFeatureKey = 'gitInfo';

export const gitInfoFeature = createFeature({
  name: gitInfoFeatureKey,
  reducer: myGitInfoReducer,
});
export const selectGitInfoState =
  createFeatureSelector<MyGitInfoState>(gitInfoFeatureKey);
export const selectGitInfo = createSelector(
  selectGitInfoState,
  (state) => state.gitInfo
);
export const selectError = createSelector(
  selectGitInfoState,
  (state) => state.error
);
