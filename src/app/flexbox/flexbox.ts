import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-flexbox',
  imports: [MatToolbarModule,MatCardModule,MatButtonModule],
  templateUrl: './flexbox.html',
  styleUrl: './flexbox.css',
})
export class Flexbox {

}
