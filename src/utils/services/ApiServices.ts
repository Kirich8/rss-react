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

      return characters.data;
    } catch (error) {
      throw new Error();
    }
  }

  public async getCurrentCharacter(
    limit: number,
    offset: number,
    name: string
  ): Promise<IResponse> {
    try {
      const response = await fetch(
        `${this.baseLink}?ts=1&apikey=${this.queryParams.apikey}&hash=${this.queryParams.hash}&limit=${limit}&offset=${offset}&nameStartsWith=${name}&modifiedSince=${this.queryParams.modifiedSince}`
      );
      const characters = await response.json();

      return characters.data;
    } catch (error) {
      throw new Error();
    }
  }
}

export const apiService = new ApiService();
