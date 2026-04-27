
import {getDB,saveDB} from "@/lib/db";

export async function GET(){
  return Response.json(getDB().appointments);
}

export async function POST(req:Request){
  const body = await req.json();
  const db = getDB();

  db.appointments.push({
    id:Date.now(),
    ...body
  });

  saveDB(db);

  return Response.json({ok:true});
}
