import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from './../../services/user.service';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  @Input()
  public user: IUser;

  @Output()
  public onRemove = new EventEmitter<string>();

  public imgs: string[];

  constructor() { }

  public ngOnInit() {
    this.imgs = [ this.user.picture.large, this.user.picture.medium, this.user.picture.thumbnail ];
  }

  public delete() {
    this.onRemove.emit(this.user.email);
  }

}