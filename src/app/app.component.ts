import { UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
    selector: "app-root",
    imports: [HeaderComponent, ArticleListComponent, UpperCasePipe],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    title = "wild blog";
}
