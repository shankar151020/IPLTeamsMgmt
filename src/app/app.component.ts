import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudfrontend';
  list: any;  // Ensure list is initialized as an empty array
  baseurl = 'http://localhost:8080/';  // Base URL for API requests
  editingIndex: number | null = null;
  editTeam: any = { id: null, name: '', trophies: 0, captainName: '' };
  constructor(private http: HttpClient) {
    // Load data when the component is initialized
    this.loadData();
  }

  // Method to fetch data from the backend
  loadData() {
    const url = this.baseurl + 'all';  // Adjust endpoint according to your backend API
    this.http.get(url).subscribe({
      next: (data) => {
        if (data != null) {
          this.list = data;  // Populate the list with fetched data
        } else {
          console.log('No data found');
        }
      },
      error: (err) => {
        console.error('Error fetching data', err);  // Handle errors during data fetch
      }
    });
  }

  // Method to handle the update action (you can implement this as needed)
  updateItem(item: any) {
    console.log('Update item', item);
    // Implement update logic here
    // For example, open a modal or navigate to an update form
  }

  // Method to handle the delete action
  deleteItem(id: number) {
    const url = this.baseurl+"Deleted/"+id;
    ;  // Adjust the delete endpoint
    this.http.delete(url).subscribe({
      next: () => {
        console.log('Item deleted');
        this.loadData();  // Reload data after deletion to reflect changes
        this.list=[];
      },
      error: (err) => {
        console.error('Error deleting item', err);  // Handle errors during delete
      }
    });
  }



  // Start Editing a Team
  edit(team: any) {
    this.editingIndex = team.id;
    this.editTeam = { ...team };
  }

  // Save Updated Team
  saveUpdate() {
    if (this.editingIndex !== null) {
      const url = this.baseurl+"update/"+this.editingIndex;

      this.http.put(url, this.editTeam).subscribe({
        next: (response) => {
          console.log('Update successful', response);
          window.alert("data updated")
          this.loadData(); // Reload data to reflect changes
          this.editingIndex = null;
        },
        error: (err) => {
          console.error('Error updating item', err);
        }
      });
    }
  }

}
