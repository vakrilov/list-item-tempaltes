import { Injectable } from "@angular/core";

export interface NewsItem {
    type: "big" | "small";
    title: string;
    text: string;
    imageUrl?: string;
}


@Injectable()
export class NewsService {

    getItems(): NewsItem[] {
        const result = [];

        for (var i = 0; i < 50; i++) {
            result.push({ type: "big", title: "This is one big item!", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis, turpis vitae ornare accumsan, arcu tortor ultrices nunc, eu aliquam libero sapien vitae tellus.", imageUrl: "https://octodex.github.com/images/octocat-de-los-muertos.jpg" });
            result.push({ type: "small", title: "Yes, we code!", text: "Vivamus a sem eget erat feugiat hendrerit at quis massa. Nullam varius ac eros non dignissim. Fusce gravida arcu libero.", imageUrl: "https://octodex.github.com/images/baracktocat.jpg" });
            result.push({ type: "small", title: "Image lost", text: "Oh no! There is no image for this one!" });
            result.push({ type: "small", title: "Octoberfest is comming!", text: "Donec lobortis ut massa quis aliquam. Phasellus orci urna, dignissim at varius at, sagittis eu ipsum.", imageUrl: "https://octodex.github.com/images/oktobercat.png" });
            result.push({ type: "big", title: "Another big one!", text: "Joint the dark side!", imageUrl: "https://octodex.github.com/images/stormtroopocat.png" });
            result.push({ type: "small", title: "The cloud is a lie!", text: "Aenean sed diam tempor, iaculis tellus id, interdum nulla. Nulla porta lorem quis nibh ullamcorper, elementum scelerisque augue semper.", imageUrl: "https://octodex.github.com/images/cloud.jpg" });
            result.push({ type: "small", title: "Image lost", text: "Oh no! There is no image for this one!" });
        }
        return result;
    }
}