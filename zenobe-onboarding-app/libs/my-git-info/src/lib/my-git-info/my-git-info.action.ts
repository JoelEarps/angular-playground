import { createAction } from '@ngrx/store';

export const fetchGitInfoActionSuccess = createAction(
  '[GitInfo] Get Git Information Success',
  (gitInfo: string) => ({ gitInfo })
);

export const fetchGitInfoActionFailure = createAction(
  '[GitInfo] Get Git Information Failure',
  (error: string) => ({ error })
);

export const fetchGitInfo = createAction(
  '[GitInfo] Get Git Information Failure'
);
