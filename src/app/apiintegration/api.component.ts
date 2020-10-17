import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Router } from "@angular/router";
import { TextView } from "tns-core-modules/ui/text-view";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    selector: "Api",
    templateUrl: "./api.component.html"
})
export class ApiComponent implements OnInit {
     name= "";
    onTextChange(args: EventData) {
        const tv = args.object as TextView;
        this.name=tv.text;
    }
    public constructor(private router: Router){
    }
    public onTap(){
        this.router.navigate(["weatherapi",this.name]);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
