import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Person } from 'src/app/models/person';
import { PersonListSelectors } from '../../state/person-list.selectors';
import * as PersonListActions from '../../state/actions/people.actions'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {

  public onDestroy$: Subject<void> = new Subject<void>();
  public people$: Observable<Person[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.people$ = this.store.select(PersonListSelectors.selectPeople).pipe(takeUntil(this.onDestroy$));
    this.store.dispatch(PersonListActions.getPeople({searchString: ''}));
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  public searchPeople(searchString: string): void {
    this.store.dispatch(PersonListActions.getPeople({searchString: searchString}));
  }

}
