import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {UsersComponent} from './features/users/users.component'
import {CommentListComponent} from './features/comments/pages/comment-list/comment-list.component'
import {HttpClientModule} from '@angular/common/http'
import {CommentFormModalComponent} from './features/comments/components/comment-form-modal/comment-form-modal.component'

@NgModule({
  declarations: [ AppComponent, UsersComponent, CommentListComponent, CommentFormModalComponent ],
  imports: [ BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule
{
}
