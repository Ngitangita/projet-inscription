export async function getData (url){
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("echec")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        throw new Error(error)
    }
}


