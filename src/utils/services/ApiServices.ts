import IResponse from '../types/IResponse';

class ApiService {
  private baseLink: string = 'http://gateway.marvel.com/v1/public/characters';
  private queryParams: Record<string, string> = {
    apikey: '5d0df45aa191b39d4a309df439a4daac',
    hash: '196c7fb26c971fb7a052fb64ebdd0616',
  };

  public async getCharacters(
    limit: number,
    offset: number
  ): Promise<IResponse> {
    try {
      const response = await fetch(
        `${this.baseLink}?ts=1&apikey=${this.queryParams.apikey}&hash=${this.queryParams.hash}&limit=${limit}&offset=${offset}`
      );
      const characters = await response.json();

      return {
        total: characters.data.total,
        results: characters.data.results,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }

  public async getCharactersByName(
    limit: number,
    offset: number,
    name: string
  ): Promise<IResponse> {
    try {
      const response = await fetch(
        `${this.baseLink}?ts=1&apikey=${this.queryParams.apikey}&hash=${this.queryParams.hash}&limit=${limit}&offset=${offset}&nameStartsWith=${name}`
      );
      const characters = await response.json();

      return {
        total: characters.data.total,
        results: characters.data.results,
      };
    } catch (error) {
      throw new Error();
    }
  }

  public async getCharacterById(id: string): Promise<IResponse> {
    try {
      const response = await fetch(
        `${this.baseLink}/${id}?ts=1&apikey=${this.queryParams.apikey}&hash=${this.queryParams.hash}`
      );
      const characters = await response.json();

      return {
        total: characters.data.total,
        results: characters.data.results,
      };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export const apiService = new ApiService();
