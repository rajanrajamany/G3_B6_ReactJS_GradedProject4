export default interface IDataList {   // it is use to map our json data retrieve from backend technologies 
    id: string;
    title : string,
    year : string,
    genres : string[],
    ratings : number[],
    poster : string,
    contentRating : string,
    duration : string,
    releaseDate : string,
    averageRating : number,
    originalTitle : string,
    storyline : string,
    actors : string[],
    imdbRating : number,
    posterurl : string
}