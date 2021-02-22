import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModule = [
    MatButtonModule, MatCardModule,
    MatFormFieldModule, MatInputModule,
    MatSnackBarModule, MatSidenavModule,
    MatListModule, MatIconModule,
    MatToolbarModule, MatSelectModule,
    MatRadioModule, MatCheckboxModule,
    MatTableModule, MatDialogModule,
    MatAutocompleteModule, MatSlideToggleModule,
    MatTabsModule, MatExpansionModule,
    MatMenuModule, MatPaginatorModule,
    MatSortModule, MatBottomSheetModule
]

@NgModule({
    imports: [...materialModule],
    exports: [...materialModule]
})
export class MaterialModule {

}