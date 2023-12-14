import { CANDIDATE_ID, endpoints } from "../utils/constants";
import { Position } from "../utils/models";

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