import { Deserializable } from "./deserializable.model";

export class Movie {
    Id: number;
    Title: string;
    Overview: string;

    deserialize(input: any) {
        //Object.assign(this, input);
        //var json = JSON.parse(input);
        this.Id = input.Id;
        this.Title = input.Title;
        this.Overview = input.Overview;
        return this;
    }
}

