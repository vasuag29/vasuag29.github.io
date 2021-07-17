import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  list = ['a software developer', 'a software engineer', 'a coder'];

  aboutTextPara1 = "Born and raised in India. An engineer with over 3 years of experience in designing, building and deploying software products. \
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  aboutTextPara2 = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  // @Output() title_desc = '|';
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.typeWriter_write('a software developer', 0);
  //   }, 800);
  // }

  // typeWriter_write(txt: string, i: number) {
  //   console.log('write');
  //   const speed = 90;
  //   if (i < txt.length) {
  //     this.title_desc = [this.title_desc.slice(0, this.title_desc.length - 1), txt.charAt(i), this.title_desc.slice(this.title_desc.length - 1)].join('');
  //     i++;
  //     setTimeout(() => { this.typeWriter_write(txt, i); }, speed);
  //   }
  // }

  // typeWriter_delete() {
  //   console.log('delete');
  //   const speed = 30;
  //   while (this.title_desc.length > 2) {
  //     setTimeout(() => {
  //       this.title_desc = this.title_desc.slice(this.title_desc.length - 2) + this.title_desc[this.title_desc.length - 1];
  //       console.log(this.title_desc);
  //     }, speed);
  //   }
  // }
}
