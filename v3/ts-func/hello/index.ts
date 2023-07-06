import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { HelloService } from "../src/services/HelloService";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.query.name;
    const body = HelloService.hello(name);
    
    context.res = { body };
};

export default httpTrigger;
