import { Component, OnInit,Inject } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ButtonService } from '../services/button.service';
import { Button } from '../shared/button';
import {TextField } from 'tns-core-modules/ui/text-field';
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";


@Component({
    selector: "Investigate",
    templateUrl: "./investigate.component.html"
})
export class InvestigateComponent implements OnInit {
    public static numberOfButtons: number;
    buttons: Button[];
    errMess: string;
    public myImage="";
    ngOnInit(){

    }
    public crimetypes: Array<String> = ["suicide","cybercrime"];
    constructor(private buttonService: ButtonService,
        @Inject('baseURL') private baseURL) {
            console.log("Constructor Called !");
        }

        public onSelectedCrimeType(args: EventData,) {
                  const picker = <ListPicker>args.object;
                  this.buttonService.getButtons(this.crimetypes[picker.selectedIndex])
                      .subscribe(buttons => this.buttons = buttons,
                        errmess => this.errMess = <any>errmess);
                  console.log(`index: ${picker.selectedIndex}; item" ${this.crimetypes[picker.selectedIndex]}`);
          }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
