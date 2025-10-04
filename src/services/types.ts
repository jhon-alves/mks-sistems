export type CharactersResponse = {
  info: {
    count: number;
    totalPages: number;
    previousPage: string | null;
    nextPage: string | null;
  };
  data: Character[];
};

export type Character = {
  _id: number;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
  parkAttractions: string[];
  allies: string[];
  enemies: string[];
  sourceUrl: string;
  name: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
  url: string;
  __v: number;
};
