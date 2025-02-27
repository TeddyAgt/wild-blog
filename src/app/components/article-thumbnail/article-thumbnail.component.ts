import { DatePipe, SlicePipe } from "@angular/common";
import { Component, Input } from "@angular/core";
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
}
