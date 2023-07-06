import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { HelloService } from "../../services/HelloService";

export async function hello(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);
    const name = request.query.get('name');
    const body = HelloService.hello(name);

    return { body };
};

app.http('hello', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: hello
});
