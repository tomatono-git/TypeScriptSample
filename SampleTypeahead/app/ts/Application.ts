import * as ko  from 'knockout';
import * as electron from "electron";

// import * as suggest from "./view/SuggestTable/SuggestTable"
import SuggestTable from "./view/SuggestTable/SuggestTable"
import IComponent from "./view/IComponent"

export default class Application implements IComponent {
    public component: string = "application";

    start(): void {
        let vm = new SuggestTable();
        ko.applyBindings(vm);
    }
}