import { createPolyanet, deletePolyanet } from "../utils/service.js";
/**
 * 
 * @param { number } gridSize 
 */
const createPolyanetCross = async (gridSize: number) : Promise<void>=> {
    try {
        if(isNaN(gridSize)) throw Error("Param Grid Size must be a number");
        const isEven: boolean = gridSize % 2 === 0;
        if(isEven) throw Error("A simetrical cross like the one asked can not be created with an even number. It must be odd.")

        for (let e = 0; e < gridSize; e++) {
            for (let h = 0; h < gridSize; h++) {
                if ( e == h && e !== 0 && e !== 1 && e !== gridSize - 1 && e !== gridSize - 2) {

                    const newPolyanetA: Position = { row: e, column: h };
                    const newPolyanetB: Position = { row: e, column: gridSize - h - 1 };
                    
                    await createPolyanet(newPolyanetA);
                    await createPolyanet(newPolyanetB);
                    // I wait 2 seconds between each pair of request because without the setTimeOut the API will return 'Too Many Requests. Try again later.'
                    await new Promise((resolve) => setTimeout(resolve, 2000));

                    console.log({ newPolyanetA })
                    console.log({ newPolyanetB })
                }
            }
        }
    } catch (error) {
        console.log("An error ocurred: ", error?.message)
    }
}


createPolyanetCross(11);