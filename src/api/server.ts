export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-o0e6.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer  232f4165b0df328dcb4d23032364a14aa0a97e5f468e1ee3'
            },
        })

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    // TODO: Finish server calls
    create: async (data: any = {}) => {
        const response = await fetch(`https://car-collection-o0e6.onrender.com/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer  232f4165b0df328dcb4d23032364a14aa0a97e5f468e1ee3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-collection-o0e6.onrender.com/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer  232f4165b0df328dcb4d23032364a14aa0a97e5f468e1ee3'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-collection-o0e6.onrender.com/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'bearer  232f4165b0df328dcb4d23032364a14aa0a97e5f468e1ee3'
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}