import { createPolyanet } from "../service";

const createPolyanetCross = async (gridSize) => {
    try {
        const isEven = gridSize % 2 === 0;
        if(isEven) throw Error("A simetrical cross can not be created with an even number. It must be odd.")

        for (let e = 0; e < gridSize; e++) {
            for (let h = 0; h < gridSize; h++) {
                if ( e == h && e !== 0 && e !== 1 && e !== gridSize - 1 && e !== gridSize - 2) {
                    const newPolyanetA = { row: e, column: h };
                    const newPolyanetB = { row: e, column: gridSize - h - 1 };
                    
                    // I wait 2 seconds between each pair of request because without the setTimeOut the API will return 'Too Many Requests. Try again later.'
                    (async () => {
                        await createPolyanet(newPolyanetA);
                        await createPolyanet(newPolyanetB);
                      })();
                    await new Promise((resolve) => setTimeout(resolve, 2000));

                    console.log({ newPolyanet: newPolyanetA })
                    console.log({ newPolyanet2: newPolyanetB })
                }
            }
        }
    } catch (error) {
        console.log("An error ocurred: ", error?.message)
    }
}


createPolyanetCross(11);