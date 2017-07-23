///<reference path="../../../../typings/modules/knockout/index.d.ts" />

// import * as ko  from 'knockout';
import * as ko  from 'knockout';

import IComponent from "../IComponent";


/**
 * サジェストの行
 */
export default class SuggestRow {
    key: ko.Observable<string>;
    val: ko.Observable<string>;

    constructor(key?: string, val?: string) {
        this.key = ko.observable<string>((key) ? key : "");
        this.val = ko.observable<string>((val) ? val : "");
    }
}
