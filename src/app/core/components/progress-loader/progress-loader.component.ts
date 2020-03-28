import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {LoaderService} from '../../service/loader.service';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.css']
})
export class ProgressLoaderComponent implements OnInit {
  isLoading: Subject<boolean>;

  constructor(private loaderService: LoaderService) {
    this.isLoading = this.loaderService.isLoading;
    console.log(this.isLoading);
  }

  ngOnInit() {
  }

}
