import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BaseApiResponse } from "../../Interfaces/IBaseAPI";
import { IUser, IUserFilters } from "../../Pages/User/Interface/IUser";

export const userAPI = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_JS_APP_API_URL + '/api',
    }),
    tagTypes: ['User', 'User'],
    endpoints: (builder) => ({
        getUser: builder.query<BaseApiResponse<IUser>, IUserFilters>({
            query: ({username , password}) => {
                return ({
                    url: `/Usuarios${username ? `?Username=${username}&Password=${password}` : ``}`,
                    method: 'GET',
                });
            },
            providesTags: (result) => result && result.result 
            ? [...result.result.map(({ id }) => ({ type: 'User', id: id } as const)), { type: 'User', id: 'LIST' }] 
            : [{ type: 'User', id: 'LIST' }],
        }),
        PostUser: builder.mutation<BaseApiResponse<IUser>, IUser>({
            query: ({ name }) => ({
                url: `/Usuarios/`,
                method: 'POST',
                body: {
                    name: name,
                },
            }),
        }),
        PatchUser: builder.mutation<BaseApiResponse<IUser>, IUser>({
            query: ({ name, id }) => ({
                url: `/Usuarios/${id}`,
                method: 'PATCH',
                body: {
                    CasaNombre: name,
                    Email: id
                },
            }),
        }),

    })
}); 

export const {
    useGetUserQuery,
    usePostUserMutation,
    usePatchUserMutation,
} = userAPI; 