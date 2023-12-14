import { CANDIDATE_ID, endpoints } from "../utils/constants";
import { Position } from "../utils/models";

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