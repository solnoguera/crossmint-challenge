import { CANDIDATE_ID, endpoints } from "./constants.js";

/**
 * @param { {row: number, column: number} } position 
 * @param { boolean } create 
 * @returns fetch response
 */
const polyanet = async (position: Position, create: boolean) : Promise<Response> => {
    const response: Response = await fetch(endpoints.polyanet, {
        method: create ? "POST" : "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...position, candidateId: CANDIDATE_ID}),
      });
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    return response;
}

/**
 * @param { {row: number, column: number} } position 
 * @returns fetch response
 */
export const createPolyanet = async (position: Position) : Promise<Response> => {
    return await polyanet(position, true);
}
/**
 * @param { {row: number, column: number} } position 
 * @returns fetch response
 */
export const deletePolyanet = async (position: Position) : Promise<Response> => {
    return await polyanet(position, false);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } color 
 * @param { boolean } create 
 * @returns fetch response
 */
const soloon = async (position: Position, color: string, create: boolean) : Promise<Response> => {
    const response: Response = await fetch(endpoints.soloon, {
        method: create ? "POST" : "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...position, color, candidateId: CANDIDATE_ID}),
      });
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    return response;
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } color 
 * @returns fetch response
 */
export const createSoloon = async (position: Position, color: string) : Promise<Response> => {
    return await soloon(position, color, true);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } color 
 * @returns fetch response
 */
export const deleteSoloon = async (position: Position, color: string) : Promise<Response> => {
    return await soloon(position, color, false);
}


/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } direction 
 * @param { boolean } create 
 * @returns fetch response
 */
const cometh = async (position: Position, direction: string, create: boolean) : Promise<Response> => {
    const response: Response = await fetch(endpoints.cometh, {
        method: create ? "POST" : "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...position, direction, candidateId: CANDIDATE_ID}),
      });
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    return response;
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } direction 
 * @returns fetch response
 */
export const createCometh = async (position: Position, direction: string) : Promise<Response> => {
    return await cometh(position, direction, true);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } direction 
 * @returns fetch response
 */
export const deleteCometh = async (position: Position, direction: string) : Promise<Response> => {
    return await cometh(position, direction, false);
}

/**
 * @returns fetch response
 */
export const goalMap = async () : Promise<Array<Array<string>>> => {
    let response: Response = await fetch(endpoints.goal_map);
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    const data: GoalMapResponse = await response.json();
    return data.goal;
}