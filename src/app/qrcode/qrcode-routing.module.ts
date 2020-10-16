import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { QrcodeComponent } from "./qrcode.component";

const routes: Routes = [
    { path: "", component: QrcodeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class QrcodeRoutingModule { }
