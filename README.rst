=============
react-cognito
=============

Summary of use cases
====================

The cognito js library helpfully lists all of the 24 use cases here:

https://github.com/aws/amazon-cognito-identity-js/

This is the current status of each use case in react-cognito:

Completed
---------

- UC4 Authenticating and establishing a session
- UC5 Retrieving user attributes for an authenticated user
- UC6 Verify email address for an authenticated user
- UC11 Change the current password for an authenticated user
- UC14 Sign out
- UC16 Retrieve the user from local storage
- UC17 Log into an identity pool with a cognito user
- UC23 Set a new password on inital login for an admin created user

Planned for version 1, but not yet implemented
----------------------------------------------

- UC7 Delete a user attribute for an authenticated user
- UC8 Update a user attribute for an authenticated user
- UC1 Registering a user with the application
- UC12 Starting and completing a forgotten password flow for an unauthenticated user

Planned for version 1.1, but not yet implemented
------------------------------------------------

- UC2 Confirming a registered, unauthenticated user
- UC3 Resending a confirmation code via SMS
- UC24 Retrieve the MFA options for the user in case MFA is optional

Not planned for version 1
-------------------------

Trivial anyway
~~~~~~~~~~~~~~

- UC9 Enable MFA for a user on a pool that has optional MFA
- UC10 Disable MFA for a user on a pool that has optional MFA
- UC13 Deleting an authenticated user
- UC15 Global sign out (invalidates all issued tokens)

Device support
~~~~~~~~~~~~~~

- UC18 List all remembered devices for an authenticated user
- UC19 List all information about the current device
- UC20 Remember a device
- UC21 Do not remember a device
- UC22 Forget the current device

Issues
======

- Review how visual transitions should be integrated into e.g. logging in
- Consider offline / liefi use

Running the example
===================

The package `local-web-server` is included as a development dependency, so if
you have installed the development packages you should have the `ws` command in
`node_modules/.bin`.

First build the library, and then the examples, then change into the htdocs directory and run the webserver::

    webpack -d
    webpack -d --config webpack.examples.js
    cd examples/htdocs
    ws -s index.html

The -s means all requests are sent to the single page application.

