import { ICharacters } from '../types/ICharacters';

class ApiService {
  private baseLink: string = 'http://gateway.marvel.com/v1/public/characters';
  private queryParams: Record<string, string> = {
    apikey: '5d0df45aa191b39d4a309df439a4daac',
    hash: '196c7fb26c971fb7a052fb64ebdd0616',
  };

  public async getCharacters(): Promise<void | ICharacters[]> {
    try {
      const response = await fetch(
        `${this.baseLink}?ts=1&apikey=${this.queryParams.apikey}&hash=${this.queryParams.hash}&limit=10`
      );
      const characters = await response.json();

      return characters.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}

export const apiService = new ApiService();
