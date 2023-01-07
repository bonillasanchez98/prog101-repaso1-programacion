export function printMultiplicateTable( base:number, limit:number = 10){

    try{
        if(limit > 0){
            for(let i = 0; i <= limit; i++){
                console.log(base + " X " + i + " = " + (base*i));
            }
        }else{
            console.log("Limit debe ser mayor que cero");
        }

    } catch (error) {
        console.log(error);
    }

}