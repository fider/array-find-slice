
import deepEqual = require('deep-equal');
const deepMatch = require('deep-match');


// ================================================================
//      Type definition
// ================================================================
declare global {

    namespace Array {

        export type XFindSliceAt_Opts = {
            fullMatch?: boolean,
            offset?: number,
            index?: number,
        }

        export type XFindSlice_Opts = {
            fullMatch?: boolean,
            offset?: number,
        }

        export type XFindAllSlices_Opts = {
            fullMatch?: boolean,
            offset?: number,
            // If find result overlaps
            allowResultOverlap?: boolean,
        }
    }

    interface Array<T> {
        /**
         * Get slice basing on `match` array. To compare it uses deep equal.
         * @param match
         * @param {boolean} [fullMatch=true]
         */
        xFindSliceAt(match: Array<Partial<T>>,  opts?: Array.XFindSliceAt_Opts): null | Array<T>;

        xFindSlice(match: Array<Partial<T>>, opts?: Array.XFindSlice_Opts): null | Array<T>;

        xFindAllSlices(match: Array<Partial<T>>, opts?: Array.XFindSlice_Opts): Array< Array<T> >;
    }
}


// ================================================================
//      Implementation
// ================================================================

// Array.prototype.xFindSliceAt = function xFindSliceAt<T>(this: T[], match: Partial<T>[], opts: Array.XFindSliceAt_Opts = {}): null | T[] {
//     // Defalut opts
//     let { fullMatch = true, index = 0, offset = 0 } = opts;

// }


// Array.prototype.xFindSlice = function xFindSlice<T>(this: T[], match: Partial<T>[], opts: Array.XFindSlice_Opts = {}): null | T[] {
//     const { fullMatch = true, offset = 0 } = opts;

// }


// Array.prototype.xFindSlice = function xFindAllSlices<T>(this: T[], match: Partial<T>[], opts: Array.XFindAllSlices_Opts = {}): T[][] {
//     const { fullMatch = true, offset = 0, allowResultOverlap = false } = opts;

// }
