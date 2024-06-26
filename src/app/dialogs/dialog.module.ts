import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatButtonModule } from '@angular/material/button';

import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { ProductsComponent } from '../admin/components/products/products.component';
import { FileuploadModule } from '../services/common/fileupload/fileupload.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [DeleteDialogComponent, SelectProductImageDialogComponent],
    imports: [
        CommonModule,
        MatDialogModule,MatCardModule,MatButtonModule,        
        FileuploadModule,
        FormsModule
        
    ]
})
export class DialogModule { }
