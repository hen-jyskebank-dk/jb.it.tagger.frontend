import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public data$?: Observable<any[]>;

  constructor(private httpclient: HttpClient) {}

  ngOnInit(): void {}

  GetDetails(id: string) {
    this.data$ = this.httpclient.get<any[]>('/api/model/branch/' + id);
  }

  GetModels(SystemID: string) {
    this.data$ = this.httpclient.get<any[]>('/api/relation/models/' + SystemID);
  }
}
