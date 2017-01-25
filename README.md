# React Cognito

You can now use Amazon Cognito to handle authentication and authorization for
your mobile and web applications.  This is particularly useful for serverless
single-page applications (SPAs).  SPAs can be hosted in S3 buckets and use AWS
services such as API Gateway, Lambda, S3, DynamoDB and others without requiring
a separate server.

This Javascript package provides a set of React components and supporting code
to make integrating with Cognito very easy, if you are using React and Redux.

[Full documentation for this package](https://doc.esdoc.org/github.com/isotoma/react-cognito/) is available.

[This package is available on npm](https://www.npmjs.com/package/react-cognito).

## Introduction

This library should be installed using npm, and depends on React, Redux, React
Router, and of course the underlying AWS packages.

In a nutshell this library allows you to write all of your own forms and UI
components, but abstracts out all of the interfacing with Cognito, and
determining which parts of UI should be rendered.

### Redux State

This package depends entirely on Redux to manage client-side state.  As well as
storing important state variables there is also a client-side state machine
that helps you display the correct UI depending on the state of the user with
respect to their authentication status.

All state is stored in redux under the key `cognito`. in there you can find:

#### user

This is either `null` or a valid `CognitoUser` object.  You are unlikely to
need to use this yourself, and it is located by components using the context.

#### state

This is a string indicating the client-side state.  See State Machine below.

#### error

If errors are encountered from the Cognito API they are stored here, and then
exposed as appropriate to UI components.  This means most error handling is
transparent and automatic for you.

#### userPool

The CognitoUserPool object, used to create users.

#### attributes

This contains all the user's Cognito attributes, if you've chosen to fetch them at login (the default).

#### creds

A CognitoIdentityCredentials object, used to authenticate against a Federated
User Pool.  Contains no secret material.

#### config

The configuration provided by the application, used to contact Cognito.

