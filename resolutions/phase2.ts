import { createPolyanet, goalMap, createCometh, createSoloon, deleteCometh, deleteSoloon, deletePolyanet } from "../services";

const createCrossmintLogo = async () : Promise<void> => {
    try {
        const megaverse: Array<Array<string>> = await goalMap();
        const megaverseSize: number = megaverse.length;

        for (let e = 0; e < megaverseSize; e++) {
            for (let h = 0; h < megaverseSize; h++) {

                const element: string = megaverse[e][h];

                const isPolyanet: boolean = element.includes("POLYANET");
                const isCometh: boolean = element.includes("COMETH");
                const isSoloon: boolean = element.includes("SOLOON");

                if(isPolyanet){
                    await createPolyanet({ row: e, column: h });
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }

                if(isCometh){
                    const comethSeparated: Array<string> = element.split("_");
                    await createCometh({ row: e, column: h }, comethSeparated[0].toLowerCase());
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }

                if(isSoloon){
                    const soloonSeparated: Array<string> = element.split("_");
                    await createSoloon({ row: e, column: h }, soloonSeparated[0].toLowerCase());
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                }
            }
        }
    } catch (error) {
        console.log("Sorry! There was an error: ", error?.message)
    }
}


createCrossmintLogo();