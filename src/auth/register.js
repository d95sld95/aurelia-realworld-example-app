import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

import user from '../services/user.service';


@inject(user, Router)
export class Register {

  constructor(User, router) {
    this.User = User;
    this.router = router;

    this.formData = {};
  }

  submitForm() {
    this.isSubmitting = true;

    let that = this;
    this.User.attemptAuth('register', this.formData)
      .then(data => {
        that.router.navigateToRoute('home');
      })
      .catch(err => {
        this.isSubmitting = false;
        err.response.json().then(data => {
          that.errors = data.errors;
        });
      });
  }
}
