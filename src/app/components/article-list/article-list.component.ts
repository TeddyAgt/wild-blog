import { NgClass } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { map, Observable, Subscription } from "rxjs";
import Article from "../../models/article.model";
import { ApiService } from "../../services/api.service";
import { ArticleThumbnailComponent } from "../article-thumbnail/article-thumbnail.component";

@Component({
    selector: "article-list",
    imports: [NgClass, ArticleThumbnailComponent],
    templateUrl: "./article-list.component.html",
    styleUrl: "./article-list.component.scss",
})
export class ArticleListComponent {
    private apiService = inject(ApiService);
    articles!: Article[];
    articleSubscription!: Subscription;

    getArticles() {
        this.articleSubscription = this.apiService
            .getArticles()
            .pipe(
                map((data: Article[]) =>
                    data.filter((article: Article) => article.isPublished)
                )
            )
            .subscribe((data) => (this.articles = data));
    }
    handleSetIsLiked(articleId: number): void {
        const article =
            this.articles.find((article) => article.id === articleId) || null;
        if (article) {
            article.isLiked = !article.isLiked;
            article.likeCount += article.isLiked ? 1 : -1;
        }
    }

    ngOnInit() {
        this.getArticles();
    }

    ngOnDestroy() {
        this.articleSubscription.unsubscribe();
    }
}
