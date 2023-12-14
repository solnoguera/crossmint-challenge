import { endpoints } from "../utils/constants";

/**
 * @returns fetch response
 */
export const goalMap = async () : Promise<Array<Array<string>>> => {
    let response: any = await fetch(endpoints.goal_map);
    if(response?.status !== 200){
        throw Error(response?.statusText || "Error")
    }
    response = await response.json();
    return response?.goal;
}