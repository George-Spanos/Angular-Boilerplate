import { NgModule } from "@angular/core";
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModule = [
    MatSidenavModule
]

@NgModule({
    imports: [...materialModule],
    exports: [...materialModule]
})
export class MaterialModule {

}