import { Component, Input } from '@angular/core';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IziToastService, MessageType, Position } from '../../admin/izi-toast.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.scss'
})
export class FileuploadComponent {

constructor(private httpClientService:HttpClientService,
  private iziToast:IziToastService,
private customToastrService:CustomToastrService){

}

  public files: NgxFileDropEntry[] ;

  @Input() options:Partial<FileUploadOptions>;
 
  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData:FormData=new FormData();
    for(const file of files){
      (file.fileEntry as FileSystemFileEntry).file((_file:File)=>{
        fileData.append(_file.name,_file,file.relativePath);
      });
    }

    this.httpClientService.post({
      controller:this.options.controller,
      action:this.options.action,
      queryString:this.options.queryString,
      headers:new HttpHeaders({"responseType": "blob"})
    },fileData).subscribe(data=>{

      const message:string="Dosyalar başarıyla eklenmiştir.";
      if(this.options.isAdminPage){
        this.iziToast.message("Başarılı",message,Position.TopRight,MessageType.Success);
      }
      else{
        this.customToastrService.message("Başarılı",message,{position:ToastrPosition.TopRight,messageType:ToastrMessageType.Success});
      }

    },(errorResponse:HttpErrorResponse)=>{
      const message:string="Dosyalar yüklenirken bir hata ile karşılaşımıştır.";
      if(this.options.isAdminPage){
        this.iziToast.message("Başarısız",message,Position.TopRight,MessageType.Error);

      }
      else{
        this.customToastrService.message("Başarısız",message,{position:ToastrPosition.TopRight,messageType:ToastrMessageType.Error});
      }
    });
  }
}

export class FileUploadOptions{
controller?:string;
action?:string;
queryString?:string;
explanation?:string;
accept?:string;
isAdminPage?: boolean=false;
}