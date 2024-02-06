import { ICustomElementViewModel, inject } from "aurelia";
import { ApiService } from "../../services/api-service";
import { recentAnimeSchema } from "../../interfaces/animeSchemas";

@inject(ApiService)
export class Home implements ICustomElementViewModel {
    public recentAnimes = [];
    public results: recentAnimeSchema[] = [];

    constructor(private api: ApiService) { }

    async binding() {
        this.recentAnimes = await this.api.getRecentAnimes();
        this.results = this.recentAnimes['results'];
        console.log(this.results);
    }
}