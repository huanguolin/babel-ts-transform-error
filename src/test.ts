// 'test.ts' is simplified from the 'asyncThrottle.ts' file.

export function action<TArgs extends readonly unknown[]>(
    func: (...args: TArgs) => void,
) {
    let currentArgs: TArgs | null = null;

    const execFunc = () => {
        if (currentArgs) {
            const args = currentArgs;
            func(...args);
        }
    };

    return (...args: TArgs) => {
        currentArgs = args;
        // do something
    };
}
