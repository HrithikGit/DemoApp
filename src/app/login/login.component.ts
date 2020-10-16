import { Component, OnInit } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable";
import { TextView } from "tns-core-modules/ui/text-view";
import {Router} from "@angular/router";

@Component({
    selector: "Login",
    templateUrl: "login.component.html",
    styleUrls :["./login-page.css"]
})
export class LoginComponent implements OnInit {
    userid="";
    password="";
    ui="";
    ps="";
    public constructor(private router:Router){}

    ngOnInit(): void {
        // Init your component properties here.
    }

    verify(){
        console.log(this.userid+" "+this.password);
        console.log(this.ui+" ?")
        if(this.userid=="123" && this.password=="123"){
            console.log("Login SuccessFull");
            this.router.navigate(["home"]);
        }
        else{
            let options = {
                title: "Wrong Match",
                message: "Re-enter correct Id and Password",
                okButtonText: "OK"
            };
            alert(options);
        }

    }
    onTextChange1(args: EventData) {
        const tv = args.object as TextView;
        this.userid=tv.text;
    }
    onTextChange2(args: EventData) {
        const tv = args.object as TextView;
        this.password=tv.text;
    }
    fp(){
        console.log("Yo!");
    }
}
