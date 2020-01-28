import '../src/index';
import { inspect } from 'util';



const data_findSlice: {
            source: any[],
            match: any[],
            opts: Array.XFindSlice_Opts,
            expected: null | any[]
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



for (let [testNo, t] of data_findSlice.entries()) {
    test_findSlice(testNo, t.source, t.match, t.opts, t.expected);
}



function test_findSlice(testNo: number, source: any[], match: any[], opts: Array.XFindSlice_Opts, expected: null | any[]) {
    test(`  Find slice test no ${testNo}\n  Source:   ${inspect(source)}\n  Match:    ${inspect(match)}\n  Opts:     ${inspect(opts)}\n  Expected: ${inspect(expected)}`, () => {
        expect( source.xFindSlice(match, opts) ).toStrictEqual(expected as any);
    });
}
