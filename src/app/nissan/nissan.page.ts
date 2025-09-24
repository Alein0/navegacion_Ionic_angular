import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.page.html',
  styleUrls: ['./nissan.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, NavbarComponent]
})
export class NissanPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
