///<reference path="../../../../typings/modules/knockout/index.d.ts" />
///<reference path="../../../../typings/globals/jquery/index.d.ts" />
// import * as ko  from 'knockout';
import * as ko from 'knockout';
import SuggestRow from "SuggestRow";
/**
 * サジェストのテーブル
 */
export default class SuggestTable {
    constructor() {
        this.component = "suggest-table";
        this.rows = ko.observableArray([
            new SuggestRow("key1", "val1"),
            new SuggestRow("key2", "val2"),
            new SuggestRow("key3", "val3"),
        ]);
        // ko.track(this);
    }
    addRow(row) {
        this.rows.push(row);
    }
    addBlankRow() {
        this.addRow(new SuggestRow("addedKey", "addedVal"));
    }
    removeRow(target) {
        console.log("removeRow(): target=%o", target);
        this.rows.remove(target);
    }
}
//# sourceMappingURL=SuggestTable.js.map