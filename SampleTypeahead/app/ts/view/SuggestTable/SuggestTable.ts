///<reference path="../../../../typings/modules/knockout/index.d.ts" />
///<reference path="../../../../typings/globals/jquery/index.d.ts" />

// import * as ko  from 'knockout';
import * as ko  from 'knockout';

export class SuggestTable {

    public rows: ko.ObservableArray<SuggestRow>;

    constructor() {
        this.rows = ko.observableArray([
            new SuggestRow("key1", "val1"),
            new SuggestRow("key2", "val2"),
            new SuggestRow("key3", "val3"),
        ]);

        // ko.track();
    }

    public addRow(): void {
        this.rows.push(new SuggestRow("addedKey", "addedVal"));
    }

    public removeRow(target: any, xx: any): void {
        console.log("removeRow(): target=%o", target);
        this.rows.remove(<SuggestRow>target);
    }
}

class SuggestRow {
    key: ko.Observable<string>;
    val: ko.Observable<string>;

    constructor(key?: string, val?: string) {
        this.key = ko.observable<string>((key) ? key : "");
        this.key = ko.observable<string>((val) ? val : "");
    }
}