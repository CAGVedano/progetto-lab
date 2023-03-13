import { characters } from "../data/characters.js";

export async function get() {
    return {
        body: JSON.stringify(
            characters,
            false,
            1
        ),
    };
}
