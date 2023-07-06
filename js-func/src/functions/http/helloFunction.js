const { app } = require('@azure/functions');
const { HelloService } = require('../../services/HelloService');

app.http('hello', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        
        const name = request.query.get('name');
        const body = HelloService.hello(name);

        return { body };
    }
});
