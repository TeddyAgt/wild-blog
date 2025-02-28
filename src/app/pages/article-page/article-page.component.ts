import { AsyncPipe, DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, ParamMap, RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import Article from "../../models/article.model";

@Component({
    selector: "app-article-page",
    imports: [DatePipe, RouterLink, AsyncPipe],
    templateUrl: "./article-page.component.html",
    styleUrl: "./article-page.component.scss",
})
export class ArticlePageComponent {
    http = inject(HttpClient);
    route: ActivatedRoute = inject(ActivatedRoute);
    articleId!: number;
    article$!: Observable<Article>;

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.articleId = Number(params.get("id"));
        });

        this.article$ = this.http.get<Article>(
            `http://localhost:3000/articles/${this.articleId}`
        );
    }
}
