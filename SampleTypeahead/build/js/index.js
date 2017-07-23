/// <reference path="../../typings/index.d.ts" />
import * as ko from 'knockout';
// import * as electron from "electron";
// import * as suggest from "./view/SuggestTable/SuggestTable"
import SuggestTable from "./view/SuggestTable/SuggestTable";
export default class Application {
    constructor() {
        this.component = "application";
    }
    start() {
        let vm = new SuggestTable();
        ko.applyBindings(vm);
    }
}
//# sourceMappingURL=index.js.map