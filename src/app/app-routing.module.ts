import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {CommentListComponent} from './features/comments/pages/comment-list/comment-list.component'

const routes: Routes = [
  {path: 'comments', component: CommentListComponent},
  {
    path: '',
    redirectTo: 'comments',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule
{
}
