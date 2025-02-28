import { DatePipe, SlicePipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";
import Article from "../../models/article.model";

@Component({
    selector: "app-article-thumbnail",
    imports: [RouterLink, DatePipe, SlicePipe],
    templateUrl: "./article-thumbnail.component.html",
    styleUrl: "./article-thumbnail.component.scss",
})
export class ArticleThumbnailComponent {
    @Input() article!: Article;
    @Output() setLiked: EventEmitter<number> = new EventEmitter<number>();

    handleClickLikeBtn(articleId: number) {
        this.setLiked.emit(articleId);
    }
}
