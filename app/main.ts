import "reflect-metadata";
import 'core-js/es/reflect'; 
import 'core-js/stable/reflect'; 
import 'core-js/features/reflect';
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { enableProdMode } from "@angular/core";

import { AppModule } from "./app.module";

enableProdMode();
platformNativeScriptDynamic().bootstrapModule(AppModule);
