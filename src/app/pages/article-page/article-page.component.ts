import { DatePipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { ActivatedRoute, ParamMap, RouterLink } from "@angular/router";
import Article from "../../models/article.model";

@Component({
    selector: "app-article-page",
    imports: [DatePipe, RouterLink],
    templateUrl: "./article-page.component.html",
    styleUrl: "./article-page.component.scss",
})
export class ArticlePageComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    articleId!: number;

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.articleId = Number(params.get("id"));
        });
    }

    article: Article = {
        id: 1,
        title: "Angular 16: Les nouveautés",
        content:
            "Les nouveautés d'Angular 16 incluent Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aliquid earum facere, quisquam, eos eum iusto voluptate cumque sint aspernatur temporibus! Consectetur ea, dolorum rem ullam veritatis quas debitis iste sunt quia est ipsa. Voluptas, voluptatum nemo culpa eaque quaerat modi ullam necessitatibus perspiciatis recusandae reiciendis beatae unde assumenda! Voluptates ut odit vel quibusdam at, ea commodi laboriosam quos iste fugiat neque, porro maiores! Deleniti eos nostrum recusandae mollitia ipsa beatae. Libero impedit accusantium error neque nemo tempore inventore quaerat, illo ex quibusdam sint quia atque quam facilis suscipit animi praesentium distinctio ab exercitationem quae totam. Rerum quo ullam iusto molestias, earum amet? Voluptatem architecto incidunt voluptas et, vero fugit enim est recusandae minima, provident illo quisquam tempore veniam. Perferendis!",
        createdAt: new Date("2023-05-01"),
        image: "https://placehold.co/420x420",
        likeCount: 233,
        isPublished: true,
        categoryName: "Angular",
        isLiked: false,
    };
}
