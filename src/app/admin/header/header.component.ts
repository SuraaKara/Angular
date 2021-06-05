import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private toastrService: ToastrService) { }

  logOut() {
    localStorage.removeItem('token');
    this.toastrService.success("Logged out successfully!");
  }
  ngOnInit(): void {
  }

}
