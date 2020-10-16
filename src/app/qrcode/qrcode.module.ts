import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { QrcodeRoutingModule } from "./qrcode-routing.module";
import { QrcodeComponent } from "./qrcode.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        QrcodeRoutingModule
    ],
    declarations: [
        QrcodeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class QrcodeModule { }
