import { HttpClientModule } from '@angular/common/http';
import { Users } from './services/user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGeneratorComponent } from './containers/users-generator/users-generator.component';
import { UserViewComponent } from './shered-components/user-view/user-view.component';
import { DateformatPipe } from './pipes/dateformat.pipe';
import { ConfirmDirective } from './directive/confirm.directive';
import { GalleryDirective } from './directive/gallery.directive';
import { DeclinePipe } from './pipes/decline.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ Users ],
  declarations: [
    UsersGeneratorComponent,
    UserViewComponent,
    DateformatPipe,
    ConfirmDirective,
    GalleryDirective,
    DeclinePipe
  ],
  exports: [UsersGeneratorComponent]
})
export class UserModule { }
