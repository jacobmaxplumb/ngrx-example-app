import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { TodoListComponent } from './todo-list/components/todo-list/todo-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'todo', component: TodoListComponent,
    children: [
      {
        path: '**',
        loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
      }
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
