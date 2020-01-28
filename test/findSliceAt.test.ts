import '../src/index';
import { inspect } from 'util';



const data_findSliceAt: {
            source: any[],
            match: any[],
            opts: Array.XFindSliceAt_Opts,
            expected: any[]
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



for (let [testNo, t] of data_findSliceAt.entries()) {
    test_findSliceAt(testNo, t.source, t.match, t.opts, t.expected);
}



function test_findSliceAt(testNo: number, source: any[], match: any[], opts: Array.XFindSliceAt_Opts, expected: null | any[]) {
    test(`  Find slice test no ${testNo}\n  Source:   ${inspect(source)}\n  Match:    ${inspect(match)}\n  Opts:     ${inspect(opts)}\n  Expected: ${inspect(expected)}`, () => {
        expect( source.xFindSliceAt(match, opts) ).toStrictEqual(expected as any);
    });
}
