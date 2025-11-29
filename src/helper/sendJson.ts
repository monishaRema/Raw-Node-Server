import { ServerResponse } from "http";

export interface ReponseData{
      message: string,
      data: any,
      status: number,
      success: Boolean,
}

export function sendJson(res:ServerResponse,statusCode:number, response:ReponseData){
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(response)
  );
}
export function sendHTML(res:ServerResponse,statusCode:number, response:any){
  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.end(
    JSON.stringify(response)
  );
}