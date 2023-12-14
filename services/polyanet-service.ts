import { CANDIDATE_ID, endpoints } from "../utils/constants";
import { Position } from "../utils/models";

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