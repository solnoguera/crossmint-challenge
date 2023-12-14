import { CANDIDATE_ID, endpoints } from "./constants.js";

const polyanet = async (position, create) => {
    let response = await fetch(endpoints.polyanet(), {
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

export const createPolyanet = async (position) => {
    return await polyanet(position, true);
}

export const deletePolyanet = async (position) => {
    return await polyanet(position, false);
}
