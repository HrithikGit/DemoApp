import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ApiRoutingModule } from "./api-routing.module";
import { ApiComponent } from "./api.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ApiRoutingModule
    ],
    declarations: [
        ApiComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ApiModule { }
