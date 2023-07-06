export const HelloService = (() => {
    return {
        hello(_name: string | undefined| null): string {
            const name = _name ?? 'world';
            return `Hello, ${name}!`;
        }
    }
})();

export type HelloService = typeof HelloService;
