// import * as suggest from "./view/SuggestTable/SuggestTable"
import { SuggestTable } from "./view/SuggestTable/SuggestTable";
import * as ko from 'knockout';
export class Application {
    static start() {
        let vm = new SuggestTable();
        ko.applyBindings(vm);
    }
}
//# sourceMappingURL=Application.js.map