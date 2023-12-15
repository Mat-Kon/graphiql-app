import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface GraphQLRequestBody {
  query: string;
}

const BASE_URL = localStorage.getItem('url') || '';

const defaultRequestBody: GraphQLRequestBody = {
  query: `
    query IntrospectionQuery {
      __schema {
        types {
          name
          description
        }
        directives {
          name
          description
        }
      }
    }
  `,
};

export const curApi = createApi({
  reducerPath: 'curApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getIntrospection: builder.query<GraphQLRequestBody, unknown>({
      query: (body: GraphQLRequestBody = defaultRequestBody) => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const { useGetIntrospectionQuery } = curApi;
