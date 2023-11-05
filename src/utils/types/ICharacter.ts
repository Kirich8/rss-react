export interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  description: string;
  urls: ICharacterUrls[];
}

interface ICharacterUrls {
  type: string;
  url: string;
}
