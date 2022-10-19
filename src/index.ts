
interface Multimedia{

    cim : string;

    kiir() : void;

    toString() : string;

}

class Zene implements Multimedia{

    cim: string;
    hossz : number;

    constructor(cim : string, hossz : number){
        this.cim = cim;
        this.hossz = hossz;
    }

    kiir(): void {
        console.log(this.toString());
    }

    toString(): string {
        return this.cim + " (" + this.hossz + " s)";
    }
}

class Konyv implements Multimedia{

    #cim : string;

    constructor(cim : string){
        this.#cim = cim;
    }

    get cim(){
        return this.#cim;
    }

    set cim(cim : string){
        this.#cim = cim;
    }

    kiir(): void {
        console.log(this.toString());
    }

    toString(): string {
        return this.#cim;
    } 

}

class Film{

    cim : string;
    hossz : number;

    constructor(cim : string, hossz : number){
        this.cim = cim;
        this.hossz = hossz;
    }

    kiir(): void {
        console.log(this.toString());
    }

    toString(): string {
        return this.cim + " (" + this.hossz + " s)";
    }

}

let f : Multimedia = new Film('Bingo',420);


let termekek : Multimedia[] = [

    new Zene('Pappa', 200),
    new Konyv('JamableBee'),
    new Film('AS',300),
    f,

];

for (let t of termekek){
    t.kiir();
} 

//let zene = new Zene('Let it go', 183);
//zene.kiir();