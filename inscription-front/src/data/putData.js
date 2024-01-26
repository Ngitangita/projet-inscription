export async function putData(url, resquest){
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json"
            },
            bady: JSON.stringify(resquest)
        });
        if (!response.ok) {
            throw new Error("echec")
        }
        const data = await response.json()
        return data;
    } catch (error) {
        throw new Error(error)
    }
}
