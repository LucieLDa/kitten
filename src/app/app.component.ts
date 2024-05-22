import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { Kitten } from './models/kitten.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateKittenComponent, ListKittenComponent, UserKittenComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //List of all of current user's kittens
  userKittenList : Kitten[] = [];

  //List of all of current available to adopt kittens
  availableKittenList : Kitten[] = [
    new Kitten("Lolo", "Norvégien", new Date() , "https://www.woopets.fr/assets/races/000/369/mini_portrait/norvegien.jpg"),
    new Kitten("Grumpy", "Persan", new Date() , "https://www.woopets.fr/assets/races/000/372/mini_portrait/persan.jpg"),
    new Kitten("Tiger", "Bengal", new Date(), "https://www.woopets.fr/assets/races/000/345/mini_portrait/bengal.jpg"),
    new Kitten("Princess", "Ragdoll", new Date(), "https://www.woopets.fr/assets/races/000/375/mini_portrait/ragdoll.jpg")
  ];

  //Add the newly adopted kitten of user's list and remove this kitten from the available ones
  onReceiveAdoptKitten(event : Kitten) : void {
    this.userKittenList.push(event);
    this.availableKittenList = this.availableKittenList.filter(k => k !== event);
  }

  //Add the newly created kitten
  onReceiveNewKitten(event : Kitten) : void {
    this.availableKittenList.push(event);
  }
}
