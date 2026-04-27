
import fs from "fs";

const FILE = "data/db.json";

function read() {
  if (!fs.existsSync(FILE)) {
    return { appointments: [] };
  }
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
}

function write(data:any) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

export function getDB() {
  return read();
}

export function saveDB(data:any) {
  write(data);
}
