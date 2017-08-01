## 1.5.1 (2017-08-01)

- #7 add store listeners as param to setupCognito so that you can specify behavior (#8) <Kevin Brown>
- Push groups into redux for calling app to use - NB. These are advisory only 

## 1.5.0 (2017-07-31)

- Moved example to own repo - react-cognito-example
- Fix issue #5 using aws-sdk instead of aws-cognito-sdk (#11) <Edgar García>
- Update to aws-sdk 2.92.0 and amazon-cognito-identity-js 1.19.0
- Removed examples - moved to own repo react-cognito-example
- Clear attributes on logout
- Login uses cognito.state.error - **BREAKING CHANGE**
  - Previously was using this.state
- Allow testing for user in a group - NB. This is advisory only and is not secure
  - Ensure resources are secured in other ways.

## 1.4.5 (2017-06-09)

- Don't reset cached email on verification code resend

## 1.4.4 (2017-05-31)

- Return promise from onResend for resend verification code

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
