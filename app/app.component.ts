import { Component, OnInit } from "@angular/core";
import { NewsService, NewsItem } from "./news.service";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public newsItems: NewsItem[];

    constructor(private service: NewsService) { }

    ngOnInit() {
        this.newsItems = this.service.getItems();
    }
}
