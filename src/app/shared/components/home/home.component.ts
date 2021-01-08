import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as SharedActions from '../../state/shared.actions';
import { SharedStateSelectors } from '../../state/shared.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy {
  public titleInput: string;
  public onDestroy$: Subject<void> = new Subject<void>();
  public title$: Observable<string> = this.store.select(SharedStateSelectors.selectTitle).pipe(takeUntil(this.onDestroy$));

  constructor(private store: Store) {}

  public updateTitle() {
    this.store.dispatch(SharedActions.setTitle({title: this.titleInput}));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
  }

}
