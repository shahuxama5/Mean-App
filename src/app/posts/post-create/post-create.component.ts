import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  newPost = 'No Content Here';
  enteredValue = 'Nothing';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost() {
    this.newPost = this.enteredValue;;
  }

}
