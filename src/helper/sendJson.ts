import { ServerResponse } from "http";

export interface ReponseData{
      message: string,
      data: any,
      status: number,
      success: Boolean,
}

export default  function sendJson(res:ServerResponse,statusCode:number, response:ReponseData){
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify(response)
  );
}