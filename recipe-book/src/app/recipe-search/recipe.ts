
export class Recipe {

    constructor(
        public id: string,
        public recipeName: string,
        public imageUrl: string,
        public sourceRecipeUrl?: string,
        public ingredients?: string,
        public totalTime?: number) { }
}
