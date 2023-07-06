import { app, InvocationContext, Timer } from "@azure/functions";

export async function clock(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request.');
}

app.timer('clock', {
    schedule: '0 */5 * * * *',
    handler: clock
});
