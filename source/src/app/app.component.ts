import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  list = ['a software developer', 'a software engineer', 'a coder'];

  aboutTextPara1 = "An engineer with over 3 years of experience in designing, building and deploying software products. \
  I work as a software developer at Siemens Healthineers, mostly working on backend engineering stuff. \
  I enjoy working on challenging research oriented ideas and thrive in a competitive environment. I'm open to software engineering opportunities, so hit me up!";

  aboutTextPara2 = "I enjoy occasional competitive gaming and love reading manga.\
  Get in touch if you'd like to have a conversation over coffee! ";

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
