import { createPolyanet, goalMap, createCometh, createSoloon, deleteCometh, deleteSoloon, deletePolyanet } from "./service.js";

const createCrossmintLogo = async () => {
    try {
        const megaverse = await goalMap();
        const megaverseSize = megaverse.length;

        for (let e = 0; e < megaverseSize; e++) {
            for (let h = 0; h < megaverseSize; h++) {

                const element = megaverse[e][h];

                const isPolyanet = element.includes("POLYANET");
                const isCometh = element.includes("COMETH");
                const isSoloon = element.includes("SOLOON");

                if(isPolyanet){
                    const res = await createPolyanet({ row: e, column: h });
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }

                if(isCometh){
                    const comethSeparated = element.split("_");
                    const res2 = await createCometh({ row: e, column: h }, comethSeparated[0].toLowerCase());
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }

                if(isSoloon){
                    const soloonSeparated = element.split("_");
                    const res3 = await createSoloon({ row: e, column: h }, soloonSeparated[0].toLowerCase());
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }
            }
        }
    } catch (error) {
        console.log("Sorry! There was an error: ", error?.message)
    }
}


createCrossmintLogo();