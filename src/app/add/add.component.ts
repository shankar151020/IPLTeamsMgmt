import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  iplTeam = {
    name: '',
    trophies: 0,
    captainName: ''
  };

  message: string = '';


private apiUrl = 'http://localhost:8080/insert';  // Adjust URL as needed

constructor(private http: HttpClient) {}

onSubmit() {
  // Send POST request to backend with form data
  this.http.post(this.apiUrl, this.iplTeam)
    .pipe(
      catchError((error) => {
        this.message = 'Error: ' + error.message;
        return of(null);  // return empty observable to handle the error gracefully
      })
    )
    .subscribe((response: any) => {
      if (response) {
        this.message = 'Team added successfully!';
      }
    });
}
}


