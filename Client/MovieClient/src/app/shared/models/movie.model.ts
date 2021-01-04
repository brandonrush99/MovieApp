import { Deserializable } from "./deserializable.model";

export class Movie {
    Id?: number;
    Title: string;
    Overview: string;
    Poster_Path: string;

    deserialize(input: any) {
        //this.Id = input.results[0].id;
        this.Title = input.results[0].title;
        this.Overview = input.results[0].overview;
        this.Poster_Path = input.results[0].poster_path;
        return this;
    }

    deserializeFromServer(input: any)
    {
        this.Id = input.id;
        this.Title = input.title;
        this.Overview = input.overview;
        this.Poster_Path = input.poster_Path;
        return this;
    }
}

