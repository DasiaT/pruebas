function getSuspender<T>(promise: Promise<T>) {
    
    let status: "pending" | "success" | "error" = "pending";
    
    let result: T;

    const suspender = promise.then(
        (data) => {
            status = "success";
            result = data;
        },
        (error) => {
            status = "error";
            result = error;
        }
    );

    const read = () => {
        switch(status){
            case "pending" : 
                throw suspender
            case "error" : 
                throw result
            default :
                return result;
        }
    }

    return { read };
}

export function Consulta<T>(URL: string) {
    const promise = fetch(URL, {
        mode: 'cors', // Agrega esto para solicitudes CORS
    })
        .then((response) => response.json())
        .then((data) => data as T)
        .catch((error) => {
            console.error('Error fetching data:', error);
            throw error;
        });

    return getSuspender<T>(promise);
}
