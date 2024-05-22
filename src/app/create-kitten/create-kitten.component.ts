import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.css'
})
export class CreateKittenComponent {
  //This component allows user to add a new kitten to be adopted
  //input of the form
  name !: string;
  race !: string;
  date !: Date;
  image !: string;
  
  //send to parent the new kitten to be adopted
  addKitten() : void{
    this.addKittenToList.emit(new Kitten(this.name, this.race, this.date, this.image));
  }

  @Output ()
  addKittenToList : EventEmitter<Kitten> = new EventEmitter();
}
