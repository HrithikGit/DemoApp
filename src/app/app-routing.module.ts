import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule) },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "camera", loadChildren: () => import("~/app/camera/camera.module").then((m) => m.CameraModule) },
    { path: "api", loadChildren: () => import("~/app/apiintegration/api.module").then((m) => m.ApiModule) },
    { path: "qrcode", loadChildren: () => import("~/app/qrcode/qrcode.module").then((m) => m.QrcodeModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
