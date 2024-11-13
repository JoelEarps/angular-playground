import { Injectable } from '@angular/core';
import { MyGitInfoService } from './my-git-info.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchGitInfo, fetchGitInfoActionSuccess } from './my-git-info.action';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class GitInfoEffects {
  loadGitInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fetchGitInfo),
      exhaustMap(() =>
        this.fetchGitInfoService.getGitInfo().pipe(
          map((gitTitle: any) => {
            return fetchGitInfoActionSuccess(gitTitle);
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private fetchGitInfoService: MyGitInfoService
  ) {}
}
