import {Component, OnInit} from '@angular/core'
import {CommentService} from '../../services/comment.service'
import {firstValueFrom} from 'rxjs'
import {Comment} from '../../models/comment.model'

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: [ './comment-list.component.sass' ]
})
export class CommentListComponent implements OnInit
{
  public commentList: Comment[] = []

  constructor(
    private commentService: CommentService
  )
  {
  }

  public ngOnInit(): void
  {
    this.fetchCommentData()
  }

  private async fetchCommentData(): Promise<void>
  {
    this.commentList = await firstValueFrom(this.commentService.listTopLevel())
  }

}
