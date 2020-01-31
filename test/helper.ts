import { inspect } from 'util';

export type ArrayTestData = Array<{
    source: any[],
    match: any[],
    opts: any,
    expected: any | Error,
}>;

export function defineArrayTests(method: keyof typeof Array.prototype, testData: ArrayTestData): void {

    for (let [testNo, td] of testData.entries()) {
        test(`Test no ${testNo}`, () => {
            try {
                expect(td.source[method](td.match, td.opts)).toStrictEqual(td.expected);
            }
            catch (err) {
                if (td.expected instanceof Error) {
                    expect(err.message).toMatch(td.expected.message);
                }
                else {
                    err.message += ``
                        + `\n+-----------------------------`
                        + `\n| Test data:`
                        + `\n|   source:   ${inspect(td.source)}`
                        + `\n|   match:    ${inspect(td.match)}`
                        + `\n|   opts:     ${inspect(td.opts)}`
                        + `\n|   expected: ${inspect(td.expected)}`
                        + `\n+-----------------------------`;
                    throw err;
                }
            }
        });
    }
}