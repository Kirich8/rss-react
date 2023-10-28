export interface ICharacter {
  id: number;
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  description: string;
}
