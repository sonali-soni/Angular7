import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  display='none';

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.display='block';
  }
}
