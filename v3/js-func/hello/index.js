const { HelloService } = require("../src/services/HelloService");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = req.query.name;
    const body = HelloService.hello(name);

    context.res = { body };
}
