import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // This injection must be public in order to be show in the DOM
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
