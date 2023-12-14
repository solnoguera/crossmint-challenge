import { Endpoints } from "./models";

// If this was a real proyect I would set an .env file with these values.
export const URL : string = "https://challenge.crossmint.io/api";
export const CANDIDATE_ID : string = "fc0f95d4-1b32-426a-b60d-f0686d434b74";

export const endpoints : Endpoints = {
    polyanet: `${URL}/polyanets`,
    soloon: `${URL}/soloons`,
    cometh: `${URL}/comeths`,
    goal_map: `${URL}/map/${CANDIDATE_ID}/goal`
}