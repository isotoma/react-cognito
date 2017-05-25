## 1.4.3 (2017-05-25)

- Cache username and email post register for populating login form.

## 1.4.2 (2017-05-23)

- Return promises from ConfirmForm
- Remove unused error props from Login

## 1.4.1 (2017-05-16)

- Better use of promises in login/authenticate

Note: This changes how the onSubmit provided by Login is used. See the example code.

## 1.4.0 (2017-05-15)

- Better use of promises in reset password sendVerification & setPassword

Note: These two function no longer send the success messages;
These need to be provided by the calling app.
