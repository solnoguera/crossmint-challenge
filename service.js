import { CANDIDATE_ID, endpoints } from "./constants.js";

/**
 * @param { {row: number, column: number} } position 
 * @param { boolean } create 
 * @returns fetch response
 */
const polyanet = async (position, create) => {
    let response = await fetch(endpoints.polyanet, {
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
export const createPolyanet = async (position) => {
    return await polyanet(position, true);
}
/**
 * @param { {row: number, column: number} } position 
 * @returns fetch response
 */
export const deletePolyanet = async (position) => {
    return await polyanet(position, false);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } color 
 * @param { boolean } create 
 * @returns fetch response
 */
const soloon = async (position, color, create) => {
    let response = await fetch(endpoints.soloon, {
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
export const createSoloon = async (position, color) => {
    return await soloon(position, color, true);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } color 
 * @returns fetch response
 */
export const deleteSoloon = async (position, color) => {
    return await soloon(position, color, false);
}


/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } direction 
 * @param { boolean } create 
 * @returns fetch response
 */
const cometh = async (position, direction, create) => {
    let response = await fetch(endpoints.cometh, {
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
export const createCometh = async (position, direction) => {
    return await cometh(position, direction, true);
}

/**
 * 
 * @param { {row: number, column: number} } position 
 * @param { string } direction 
 * @returns fetch response
 */
export const deleteCometh = async (position, direction) => {
    return await cometh(position, direction, false);
}

/**
 * @returns fetch response
 */
export const goalMap = async () => {
    let response = await fetch(endpoints.goal_map);
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    response = await response.json();
    return response?.goal;
}