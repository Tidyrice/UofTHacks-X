import { WashroomData, Coordinate } from "./data";

export async function SaveData(data) {
    const path = fs.documentDirectory + "data.json";
    try {
        await fs.writeAsStringAsync(path, JSON.stringify(data));
    } catch (e) {
        console.log('error', e);
    }
}

export async function LoadData() {
    const path = fs.documentDirectory + "data.json";

    //does the file exist?
    if (!(await fs.getInfoAsync(path)).exists) {
        const empty = [];
        return empty;
    }

    //read file
    const data = JSON.parse(await fs.readAsStringAsync(path));
    return new WashroomData(data.coordinates, data.company, data.waitTimeFemales, data.waitTimeMales);
}