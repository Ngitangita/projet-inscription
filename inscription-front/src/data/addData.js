export async function postData(url, request){
    try {
      
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
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

