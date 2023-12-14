export const URL = "https://challenge.crossmint.io/api";
export const CANDIDATE_ID = "fc0f95d4-1b32-426a-b60d-f0686d434b74";

export const endpoints = {
    polyanet: () => `${URL}/polyanets`,
    soloon: () => `${URL}/soloons`,
    cometh: () => `${URL}/comeths`,
    goal_map: (candidateId) => `${URL}/map/${candidateId}/goal`
}