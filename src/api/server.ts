const token = 'd5ccb088109ce812a48065ff10dbf2bbc3bf5398acbbba98'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://spontaneous-bombolone-f2c0d9.netlify.app/#/dashboard`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }         
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://spontaneous-bombolone-f2c0d9.netlify.app/#/dashboard`,
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)  
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch (`https://spontaneous-bombolone-f2c0d9.netlify.app/#/dashboard/${id}`,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }
        
        return await response.json()
    },

    delete: async (id:string) => {
        console.log(id);
        
        const response = await fetch (`https://spontaneous-bombolone-f2c0d9.netlify.app/#/dashboard/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to delete data on the server')
        }
        
        return;
    },

}