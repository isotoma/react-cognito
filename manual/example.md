# Usage

## Running the example

The package `local-web-server` is included as a development dependency, so if
you have installed the development packages you should have the `ws` command in
`node_modules/.bin`.

### Set up your user and identity pools

Go to the AWS Console and create a user pool and a federated identity pool.
The user pool needs an associated app which must NOT have a secret.
First build the library, and then the examples, then change into the htdocs directory and run the webserver:

## Building

    webpack -d

copy the config.json.example as config.json and fill in the identifiers for
your user pool and identity pool.

    webpack -d --config webpack.examples.js
    cd examples/htdocs
    ws -s index.html

The `-s` means all requests are sent to the single page application.

#### Create a test user

1. Go to your user pool and go to "Users and groups"
2. Click "create user"
3. Complete the form:
  - Enter a username 
  - Enter a password that conforms to the rules of the user pool
  - Uncheck 'Mark phone number as verified?'
  - Uncheck 'Mark email as verified?'
  - Enter a valid email address
  - Click 'Create User'

#### First time login

1. Go to your deployed example application webserver
2. You should see the login form
3. Enter the username and password created above
4. You should be asked for a new password, since this is your first login
5. Enter a new password. It must conform to the rules of the user pool.
6. You should then be taken to a verification code entry screen.  check your email and enter the code.
7. You should now see the logged in screen, showing your attributes and giving you some options.

Note that during this flow quitting and reloading the browser, then navigating back to this page, 
will result in you returning to the correct step.

#### Logout and Login

1. Click 'log out'
2. You should see the login form
3. Login again using your username and the new password you chose above.
4. You should be taken to the logged in screen

#### Password changing

1. Click 'Change password'
2. Enter your existing password and a new password
3. Click set new password
4. you should see a message saying your password has been changed
5. Click 'Home'

#### Change email address

1. Click 'Change email address'
2. You should see a form with your existing email address
3. Enter a new valid email address
4. You should be asked for a verification code.  Check your email for the code.
5. Enter the code.
6. You will be taken to the logged in screen.

Note that you can also reload the page after step 4, or close your browser, and you will 
be required to enter the verification code.

#### Password recovery

1. Log out
2. Click 'Password Reset'
3. Enter your username
4. Click 'send verification code'
5. It should say 'verification code sent'
6. Check your email and get the code
7. enter the code and your new password
8. Click 'set new password'
9. It should say 'Password reset'
10. Click 'Home'
11. Log in with your new password
