interface Character {
    id: number;
    name: string;
    image: string;
    species: string;
    status: string;
    origin: { name: string };
}

interface ApiResponse {
    info: { pages: number };
    results: Character[];
}