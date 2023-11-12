import { ICharacter } from './ICharacter';

export default interface IResponse {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ICharacter[];
}
