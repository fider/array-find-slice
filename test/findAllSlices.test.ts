import '../src/index';
import { defineArrayTests } from './helper';


const data_findAllSlices: {
            source: any[],
            match: any[],
            opts: Array.XFindAllSlices_Opts,
            expected: any[][] | Error
        }[] = [
    {
        source:   [],
        match:    [],
        opts:     {},
        expected: new Error(`Array.prototype.xFindAllSlices(match). Invalid argument 0. Expected that "match" array length is greater than 0.`),
    },
    {
        source:   [],
        match:    [2, 4, 6],
        opts:     {},
        expected: []
    },
    {
        source:   [1, 2, 3, 4, 5],
        match:    [1, 2, 3],
        opts:     {},
        expected: [[1, 2, 3]],
    },
    {
        source:   [1, 2, 3, 4, 5],
        match:    [3, 4, 5],
        opts:     {},
        expected: [[3, 4, 5]],
    },
    {
        source:   [1, 2, 3, 4, 1, 2, 3, 4],
        match:    [2, 3],
        opts:     {},
        expected: [[2, 3], [2, 3]],
    },
    {
        source:   [1, 1, 1, 1, 1],
        match:    [1, 1],
        opts:     {},
        expected: [[1, 1], [1, 1]],
    },
    { // No matches
        source:   [
            { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
            { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['X', 'z'] }  ]},
            { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
            { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'Z'] }  ]}
        ],
        match:    [
            {       a: [{ a1: [undefined, 'X'] }] },
            {                                                    b: [undefined,          { b2: [undefined, 'X'] }] },
        ],
        opts:     {},
        expected: [],
    },
    { // Match first pair only
        source:   [
            { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
            { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['a', 'X'] }  ]},
            { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
            { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'Z'] }  ]}
        ],
        match:    [
            {       a: [{ a1: [undefined, 'X'] }] },
            {                                                    b: [undefined,          { b2: [undefined, 'X'] }] },
        ],
        opts:     {},
        expected: [
            [
                { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
                { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['a', 'X'] }  ]},
            ],
        ],
    },
    { // Match second pari only
        source:   [
            { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
            { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['X', 'b'] }  ]},
            { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
            { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'X'] }  ]}
        ],
        match:    [
            {       a: [{ a1: [undefined, 'X'] }] },
            {                                                    b: [undefined,          { b2: [undefined, 'X'] }] },
        ],
        opts:     {},
        expected: [
            [
                { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
                { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'X'] }  ]}
            ]
        ],
    },
    { // Match 2 pairs
        source:   [
            { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
            { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['a', 'X'] }  ]},
            { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
            { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'X'] }  ]}
        ],
        match:    [
            {       a: [{ a1: [undefined, 'X'] }] },
            {                                                    b: [undefined,          { b2: [undefined, 'X'] }] },
        ],
        opts:     {},
        expected: [
            [
                { n: 0, a: [{ a1: ['a', 'X'] }, { a2: ['b', 'c'] }], b: [                                        ]},
                { n: 1, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['a', 'X'] }  ]},
            ],
            [
                { n: 2, a: [{ a1: ['a', 'X'] }, { a2: ['e', 'f'] }], b: [{ b1: ['c', 'd'] }, { b2: ['b', 'e'] }  ]},
                { n: 3, a: [                                      ], b: [{ b1: ['j', 'b'] }, { b2: ['b', 'X'] }  ]},
            ]
        ],
    },
];


defineArrayTests('xFindAllSlices', data_findAllSlices);
