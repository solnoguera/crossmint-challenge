interface Endpoints {
    polyanet: string;
    soloon: string;
    cometh: string;
    goal_map: string;
}

interface Position {
    row: number;
    column: number;
}

interface GoalMapResponse {
    goal: Array<Array<string>>
}