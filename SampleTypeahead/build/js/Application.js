import * as ko from 'knockout';
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
//# sourceMappingURL=Application.js.map