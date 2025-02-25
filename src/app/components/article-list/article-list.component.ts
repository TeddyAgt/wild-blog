import { DatePipe, SlicePipe } from "@angular/common";
import { Component } from "@angular/core";
import Article from "../../models/article.model";

@Component({
    selector: "article-list",
    imports: [DatePipe, SlicePipe],
    templateUrl: "./article-list.component.html",
    styleUrl: "./article-list.component.scss",
})
export class ArticleListComponent {
    article: Article = {
        title: "Le titre de mon article",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae asperiores consectetur id placeat, reprehenderit officia quisquam, architecto laudantium officiis unde quo similique porro, sed ut totam deleniti cumque cum! Facilis cum beatae error id ex nihil aperiam! Sequi nulla beatae incidunt pariatur? Odio culpa porro similique fuga voluptatem quidem voluptatum explicabo illo vitae voluptates dolorem labore, sit quisquam doloribus, ea modi laboriosam earum, iste ducimus soluta blanditiis recusandae excepturi delectus. Explicabo, beatae dicta fugit aliquid doloribus itaque dignissimos quia. Laboriosam dolorum temporibus excepturi accusamus atque qui deserunt ab. Hic deleniti, error, molestias adipisci a nisi soluta voluptatibus consequatur eaque, neque optio quidem maiores non quaerat eos libero tempora iusto impedit vero aspernatur modi qui? Quidem ipsam tempore delectus quas dolorum.",
        image: "https://placehold.co/420x420",
        createdAt: new Date(),
        isPublished: false,
        likeCount: 7,
        categoryName: "Angular",
    };
}
