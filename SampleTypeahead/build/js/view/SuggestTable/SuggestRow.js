///<reference path="../../../../typings/modules/knockout/index.d.ts" />
// import * as ko  from 'knockout';
import * as ko from 'knockout';
/**
 * サジェストの行
 */
export default class SuggestRow {
    constructor(key, val) {
        this.key = ko.observable((key) ? key : "");
        this.val = ko.observable((val) ? val : "");
    }
}
//# sourceMappingURL=SuggestRow.js.map