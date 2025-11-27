import { IncomingMessage, ServerResponse } from "http";

export type RoutHandler = (req: IncomingMessage, res: ServerResponse) => void;

/*
    "key" : value => "key" : value = RoutHandler

    {
        key:{
            key:RoutHandler
        }
    }
*/

export const routes: Map<string, Map<string, RoutHandler>> = new Map();

export default function addRoute(
  method: string,
  path: string,
  handler: RoutHandler
) {
  // api/user => POST
  if (!routes.has(method)) {
    routes.set(method, new Map());
  }

  routes.get(method)!.set(path, handler);
}
