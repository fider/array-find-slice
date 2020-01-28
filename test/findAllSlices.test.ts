import '../src/index';
import { inspect } from 'util';



const data_findAllSlices: {
            source: any[],
            match: any[],
            opts: Array.XFindAllSlices_Opts,
            expected: any[][]
        }[] = [

    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: []
    },
];



for (let [testNo, t] of data_findAllSlices.entries()) {
    test_findAllSlices(testNo, t.source, t.match, t.opts, t.expected);
}



function test_findAllSlices(testNo: number, source: any[], match: any[], opts: Array.XFindAllSlices_Opts, expected: null | any[]) {
    test(`  Find slice test no ${testNo}\n  Source:   ${inspect(source)}\n  Match:    ${inspect(match)}\n  Opts:     ${inspect(opts)}\n  Expected: ${inspect(expected)}`, () => {
        expect( source.xFindAllSlices(match, opts) ).toStrictEqual(expected as any);
    });
}
