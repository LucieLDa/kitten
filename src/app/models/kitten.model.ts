export class Kitten {
    readonly name : string;
    readonly race : string;
    readonly date : Date;
    readonly image : string;

    constructor(name : string, race : string, date : Date, image : string){
        this.name = name;
        this.race = race;
        this.date = date;
        this.image = image;
    }
}