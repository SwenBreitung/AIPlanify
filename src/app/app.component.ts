import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private auth: AngularFireAuth) {}

  async  ngOnInit() {
    // const user = await this.auth.currentUser; // Use await for Promise
    // if (user) {
    //   console.log('✅ Firebase-Verbindung erfolgreich!');
    // } else {
    //   console.log('❌ Fehler: Keine Firebase-Verbindung!');
    // }
  }
  title = 'AIPlanify';
}

