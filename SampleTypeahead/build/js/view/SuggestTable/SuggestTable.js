///<reference path="../../../../typings/modules/knockout/index.d.ts" />
///<reference path="../../../../typings/globals/jquery/index.d.ts" />
// import * as ko  from 'knockout';
import * as ko from 'knockout';
export class SuggestTable {
    constructor() {
        this.rows = ko.observableArray([
            new SuggestRow("key1", "val1"),
            new SuggestRow("key2", "val2"),
            new SuggestRow("key3", "val3"),
        ]);
        // ko.track();
    }
    addRow() {
        this.rows.push(new SuggestRow("addedKey", "addedVal"));
    }
    removeRow(target, xx) {
        console.log("removeRow(): target=%o", target);
        this.rows.remove(target);
    }
}
class SuggestRow {
    constructor(key, val) {
        this.key = ko.observable((key) ? key : "");
        this.key = ko.observable((val) ? val : "");
    }
}
//# sourceMappingURL=SuggestTable.js.map