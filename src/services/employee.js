// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => `employee`,
    }),
    getAnEmployee: builder.query({
      query: (id) => `employee/${id}`
    }),
    addEmployee: builder.mutation({
      query(body) {
        console.log(body);
        return {
          url: `employee`,
          method: 'POST',
          body,
        }
      },
      // Invalidates all Post-type queries providing the `LIST` id - after all, depending of the sort order,
      // that newly created post could show up in any lists.
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
    }),
    updateEmployee: builder.mutation({
      query(body) {
        console.log(body)
        return {
          url: `employee`,
          method: `PUT`,
          body
        }
      }
    }),
    deleteEmployee: builder.mutation({
      query(id) {
        console.log(id)
        return {
          url: `employee/${id}`,
          method: `DELETE`,
          id
        }
      }
    })
  }),
})
// console.log(employeeApi)
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useGetAnEmployeeQuery,useAddEmployeeMutation, useUpdateEmployeeMutation, useDeleteEmployeeMutation } = employeeApi