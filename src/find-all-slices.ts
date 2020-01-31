
import deepEqual = require('deep-equal');
import { DeepPartial } from 'tsdef';
import deepMatch from 'deep-match2';

// ================================================================
//      Type definition
// ================================================================
declare global {

    namespace Array {


        export type XFindAllSlices_Opts = {
            fullMatch?: false,
            // TODO
            // offset?: number,
            // TODO
            // allowResultOverlap?: boolean,
        } | {
            fullMatch: true
        };
    }

    interface Array<T> {

        /**
         * default `opts`
         * - `fullMatch:  false`
         */

        xFindAllSlices(match: DeepPartial<T>[], opts?: {fullMatch?: false}): T[][];
        xFindAllSlices(match: T[], opts?: {fullMatch: true}): T[][];
    }
}

// ================================================================
//      Implementation
// ================================================================

Array.prototype.xFindAllSlices = function xFindAllSlices<T>(this: T[], match: DeepPartial<T>[], opts: Array.XFindAllSlices_Opts = {}): T[][] {
    const { fullMatch = false/*, offset = 0, allowResultOverlap = false*/ } = opts;
    const result: T[][] = [];

    let foundInRow = 0;
    let targetFoundInRow = match.length;
    let maxSearch = this.length - targetFoundInRow;

    if ( ! match.length) {
        throw new Error(`Array.prototype.xFindAllSlices(match). Invalid argument 0. Expected that "match" array length is greater than 0.`);
    }

    for (let i = 0; i <= Math.min(this.length, maxSearch + foundInRow); i++) {

        if (fullMatch) { // full match
            if ( deepEqual(this[i], match[foundInRow]) ) {
                foundInRow++;
            }
            else {
                foundInRow = 0;
            }
        }
        else { // partial match
            if ( deepMatch(this[i], match[foundInRow], { arrayOrderMatters: true }) ) {
                foundInRow++;
            }
            else {
                foundInRow = 0;
            }
        }

        if (foundInRow === targetFoundInRow) {
            let startIncl = i + 1 - foundInRow;
            let endExcl   = i + 1;
            result.push( this.slice(startIncl, endExcl) );
            foundInRow = 0;
        }
    }

    return result;
};