import { ICharacter } from './ICharacter';

export default interface IResponse {
  total: number;
  results: ICharacter[];
}
