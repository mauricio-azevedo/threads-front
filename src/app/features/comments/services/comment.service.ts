import {Injectable} from '@angular/core'
import {Comment} from '../models/comment.model'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {PostCommentDto} from '../dtos/post-comment.dto'

@Injectable({
    providedIn: 'root'
})
export class CommentService
{

    url: string = 'http://localhost:3000/comments'

    constructor(
        private http: HttpClient
    )
    {
    }

    public post(comment: PostCommentDto): Observable<Comment>
    {
        return this.http.post<Comment>(this.url, comment)
    }

    public listTopLevel(): Observable<Comment[]>
    {
        return this.http.get<Comment[]>(this.url + '/top-level')
    }
}
