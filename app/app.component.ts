import { Component, OnInit } from "@angular/core";
import { NewsService, NewsItem } from "./news.service";

declare function __startCPUProfiler(name: string);
declare function __stopCPUProfiler(name: string);

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

    public templateSelector = (item: NewsItem, index: number, items: any) => {
        if (item.type === "big") {
            return "big"
        } else if (item.type === "small") {
            return item.imageUrl ? "small" : "small-no-image";
        }
        throw new Error("Unrecognized template!")
    }

    // Profiling code
    public isProfiling: boolean;
    toggleProfiling() {
        if (this.isProfiling) {
            __stopCPUProfiler("list-view");
        } else {
            __startCPUProfiler("list-view");
        }
        this.isProfiling = !this.isProfiling;
    }
}
