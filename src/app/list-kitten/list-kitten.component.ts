import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { CommonModule } from '@angular/common';
import { CreateKittenComponent } from '../create-kitten/create-kitten.component';
import { UserKittenComponent } from '../user-kitten/user-kitten.component';

@Component({
  selector: 'app-list-kitten',
  standalone: true,
  imports: [CommonModule, CreateKittenComponent, UserKittenComponent],
  templateUrl: './list-kitten.component.html',
  styleUrl: './list-kitten.component.css'
})
export class ListKittenComponent {
  //This componenent represent a kitten that can be adopted
  @Input()
  kitten !: Kitten; 

  //Send event to parent to tell that this kitten is adopted by user
  adoptKitten(){
    this.addKittenToUser.emit(this.kitten);
  }

  @Output()
  addKittenToUser : EventEmitter<Kitten> = new EventEmitter();
}
