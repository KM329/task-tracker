import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponent } from './modules/task-manager/task-manager.component';
import { TaskAddComponent } from './modules/task-manager/components/task-add/task-add.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/lists', pathMatch: 'full' },
//   { path: 'lists', component: TaskManagerComponent },
// ];

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'add',
    component: TaskAddComponent
  },
  {
    path:'add/:id',
    component: TaskAddComponent
  },
  { path: 'lists',
  loadChildren: () => import('./modules/task-manager/task-manager.module').then(m => m.TaskManagerModule) },
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
