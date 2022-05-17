import { rest } from "msw";
import mockTodos from "./todos";

const handlers = [
  rest.get('https://my-json-server.typicode.com/irhamhqm/todo-json-placeholder/todos', async (req, res, ctx) => {
    return res(ctx.json([ ...mockTodos ]))
  })
];

export default handlers;