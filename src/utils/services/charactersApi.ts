import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import IResponse from '../types/IResponse';
import { apiService } from './ApiServices';

export const charactersApi = createApi({
  reducerPath: 'charactersApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://gateway.marvel.com/v1/public/',
  }),

  endpoints: (build) => ({
    getCharacters: build.query<IResponse, { limit: number; offset: number }>({
      queryFn: async (args) => {
        const response = await apiService.getCharacters(
          args.limit,
          args.offset
        );
        return {
          data: {
            total: response.total,
            results: response.results,
          },
        };
      },
    }),
    getCharactersByName: build.query<
      IResponse,
      { limit: number; offset: number; name: string }
    >({
      queryFn: async (args) => {
        const response = await apiService.getCharactersByName(
          args.limit,
          args.offset,
          args.name
        );
        return {
          data: {
            total: response.total,
            results: response.results,
          },
        };
      },
    }),
    getCharacterById: build.query<IResponse, { id: string }>({
      queryFn: async (args) => {
        const response = await apiService.getCharacterById(args.id);
        return {
          data: {
            total: response.total,
            results: response.results,
          },
        };
      },
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharactersByNameQuery,
  useGetCharacterByIdQuery,
} = charactersApi;
