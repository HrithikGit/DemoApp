import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { InvestigateRoutingModule } from "./investigate-routing.module";
import { InvestigateComponent } from "./investigate.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        InvestigateRoutingModule
    ],
    declarations: [
        InvestigateComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InvestigateModule { }
