import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";

import { AppComponent } from "./app.component";
import { NewsService } from "./news.service";

@NgModule({
    declarations: [AppComponent],
    providers: [NewsService],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
