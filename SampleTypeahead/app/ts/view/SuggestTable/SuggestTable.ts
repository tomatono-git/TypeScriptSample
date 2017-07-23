///<reference path="../../../../typings/modules/knockout/index.d.ts" />
///<reference path="../../../../typings/globals/jquery/index.d.ts" />

// import * as ko  from 'knockout';
import * as ko  from 'knockout';

import IComponent from "../IComponent";
import SuggestRow from "SuggestRow";

/**
 * サジェストのテーブル
 */
export default class SuggestTable implements IComponent {

    public component: string = "suggest-table";

    public rows: ko.ObservableArray<SuggestRow>;

    constructor() {
        this.rows = ko.observableArray([
            new SuggestRow("key1", "val1"),
            new SuggestRow("key2", "val2"),
            new SuggestRow("key3", "val3"),
        ]);

        // ko.track(this);
    }

    public addRow(row: SuggestRow): void {
        this.rows.push(row);
    }

    public addBlankRow(): void {
        this.addRow(new SuggestRow("addedKey", "addedVal"));
    }

    public removeRow(target: any): void {
        console.log("removeRow(): target=%o", target);
        this.rows.remove(<SuggestRow>target);
    }
}