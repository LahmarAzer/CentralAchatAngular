export class Rating {
    idRaitingProduct!: number;
    nbrEtoilesProduct!: number;
    reviewProduct!: string;
    userRating!: {
      idUser: number;
      firstName: string;
      lastName: string;
    };

}