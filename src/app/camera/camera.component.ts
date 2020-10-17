import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import {ImageSource, fromFile, fromResource, fromBase64} from "tns-core-modules/image-source";
import {Folder, path, knownFolders} from "tns-core-modules/file-system";


@Component({
    selector: "Camera",
    templateUrl: "./camera.component.html"
})
export class CameraComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    public myImage="";

    public saveToGallery: boolean = false;
    public allowsEditing: boolean = false;
    public keepAspectRatio: boolean = true;
    public width: number = 320;
    public height: number = 240;
    public cameraImage: ImageAsset;
    public actualWidth: number;
    public actualHeight: number;
    public scale: number = 1;
    public labelText: string;

    openCam(args) {
        var milliseconds = (new Date).getTime();
        var that=this;
        requestPermissions().then(
            () => {
                takePicture({ width: this.width, height: this.height, keepAspectRatio: this.keepAspectRatio, saveToGallery: this.saveToGallery, allowsEditing: this.allowsEditing })
                    .then((imageAsset: any) => {
                        this.cameraImage = imageAsset;
                        const source = new ImageSource();
                        source.fromAsset(imageAsset)
                            .then((imageSource: ImageSource) => {
                                const folderPath: string = knownFolders.documents().path;
                                const fileName = milliseconds+".png";
                                const filePath = path.join(folderPath, fileName);
                                const saved: boolean = imageSource.saveToFile(filePath, "png");

                                that.myImage=filePath;
                                if (saved) {

                                    console.log("Image saved successfully!");
                                }
                            })
                            .catch((e) => {
                                console.log("Error: ");
                                console.log(e);
                            });
                        let that = this;
                        imageAsset.getImageAsync(function (nativeImage, ex) {
                            if (ex instanceof Error) {
                                throw ex;
                            } else if (typeof ex === "string") {
                                throw new Error(ex);
                            }

                            if (imageAsset.android) {
                                // get the current density of the screen (dpi) and divide it by the default one to get the scale
                                that.scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
                                that.actualWidth = nativeImage.getWidth();
                                that.actualHeight = nativeImage.getHeight();
                            } else {
                                that.scale = nativeImage.scale;
                                that.actualWidth = nativeImage.size.width * that.scale;
                                that.actualHeight = nativeImage.size.height * that.scale;
                            }
                            that.labelText = `Displayed Size: ${that.actualWidth}x${that.actualHeight} with scale ${that.scale}\n` +
                                `Image Size: ${Math.round(that.actualWidth / that.scale)}x${Math.round(that.actualHeight / that.scale)}`;

                            console.log(`${that.labelText}`);
                        });
                    }, (error) => {
                        console.log("Error: " + error);
                    });
            },
            () => alert('permissions rejected')
        );
    }
}
