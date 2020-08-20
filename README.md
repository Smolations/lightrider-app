# Lightrider App
A character management and in-game utility for the Lightrider TTRPG.


## Machine Setup

This is much easier on a Mac. For PCs, you will need [Git for Windows](https://gitforwindows.org/)
OR this project needs to be able to export the app for standalone use.
**Directions here are mac-specific.**

**NOTE:** For ALL steps, the `$` symbol denotes the terminal command prompt.
Your prompt will most likely contain your machine/user names (e.g. `my-computername@username$`),
but we'll omit that information and opt just for the symbol. Commands _after_
the `$` are what you'd want to copy/paste into terminal. For example, for the
following instruction, you'd copy/paste "some command" into your terminal:
```
$ some command
```


### Step 0: Get developer tools

Open your **Terminal** app (`cmd`+`space` to open spotlight, type "terminal", hit `enter`).
You will want to keep this app open from this point on. You can open additional
tabs in the main window with `cmd`+`t`.

Once your terminal is open, install developer tools with:
```
$ xcode-select --install
```

A dialog will pop open if they aren't installed. Click the **Install** button
(NOT the **Get XCode** button) and then click the **Agree** button on the following
dialog to install the tools. It doesn't take long.


### STEP 1 (one-time): Create projects folder

You can do this with **Finder**, but you might want to get used to using your
terminal. You'll need help with the latter, so I'll provide those instructions
throughout this README.

Create a `projects` folder in your home folder.
```
$ cd ~
$ mkdir projects
```


### STEP 2 (one-time): Install node version manager (`nvm`)

This app is written entirely in javascript, so ther server which runs it needs
a javascript environment. The javascript environment outside of a browser is
called [NodeJS](https://nodejs.org/en/). It has many different versions so
we need a way to manage them if the version needed by this app should ever
change. The software that allows us to do this is called [nvm](https://github.com/nvm-sh/nvm).
The project page has install instructions, but I'm including them here for
convenience. First, we install it:
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

The **Terminal** app automatically loads certain files if present on your machine.
This allows you to load certain software, set variables, define functions/aliases,
and many other things automatically when a new terminal window/tab opens. Nvm
depends on one of those files so that it always loads and chooses the right
node version based on your settings. We need to create one of these files if
it doesn't exist, then add a little content to it.

All of these "magic" files are called _dotfiles_. They are called this because
they are all prefixed with a period and therefore hidden in your **Finder**
window by default. First, we'll ensure the file exists (you are probably still
in your home directory from the previous `cd ~`, but I'm including it here for
assuredness):
```
$ cd ~
$ touch .profile
```

Now we need to open this file and edit its contents. Open a **Finder** window
if you haven't already and view/open your home folder. To toggle hidden file
visibility, press `cmd`+`shift`+`.`. Find the `.profile` file from the previous
step and open it (**TextEdit** is probably fine here; just need a basic text
editor). If it's empty, paste the following snippet. If it has contents, paste
the `echo` line at the very top (on its own line) and the rest of the snippet
at the very bottom.
```
echo "-> ~/.profile"

# This tell nvm where to find its assets
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Open a new terminal tab (`cmd`+`t`). You should see the text `-> ~/.profile`
near the top if all is well. You can close the previous tab in which you were working.

To check that `nvm` is working properly, try giving terminal the following command:
```
$ nvm ls
```

You should observe output related to current node versions on your machine and
_not_ an error about `nvm` being an invalid command.


### STEP 4 (one-time): Install the appropriate node version

For simplicity, I'll just specify the version to install below. In the future,
you can see the appropriate node version by looking in the `.nvmrc` file at the
root of this project. The following command will install the target version:
```
$ nvm install 10.20.1
```

You can test that the correct version has been installed and activated with
the following command:
```
$ node -v
```


### STEP 5 (one-time): Clone project repository

You are now ready to get the app on your machine! To get the correct project address,
visit [the github project page](https://github.com/Smolations/lightrider-app) and
find the green **Code** button near the top right of the page. You'll see an overlay
and a link in the corner with text: **HTTPS**. Click that link to change the address
from an SSH address (don't worry about it for now, :yum:) to the HTTPS address.
Click the clipboard icon next to the url to copy it to your clipboard, or manually
select the text and copy it.

Now, go back to your terminal window and paste url after typing the `git clone` command:
```
$ cd ~/projects
$ git clone https://github.com/Smolations/lightrider-app.git
```

This will start the download of the project from github onto your machine. A new
folder is created in the `projects` folder you created earlier containing the app.


--------------------------------------------------------------------------
the rest of the commands will be used often out of order, and will soon become
second nature. however, they are listed here, more or less, in the order
they are used for initial setup.
--------------------------------------------------------------------------


// navigating to the project folder in terminal
$ cd ~/projects/lightrider-app

// NOTE: the rest of these commands should be used while within the project folder

// ensuring correct node version is used
$ nvm use

// installing/refreshing project dependencies
// - do this after initial clone and whenever switching branches
$ npm install

// start the app
$ npm start

// to stop the server, press ctrl+c

// pull down recent changes from repository
$ git pull

// to check out a branch from a pull request (a card feature that hasn't been
// merged into the `master` branch):
// - get the branch name (represented by <branch_name> in subsequent command)
//   - no pull request: get branch name from smola
//   - pull request: in github project, click "Pull Requests" tab, click PR,
       copy branch name from top of PR
$ git fetch
$ git checkout <branch_name>
$ npm install
$ npm start

// to move back to `master` branch after messing with a different branch,
// follow above steps but use `master` as the `<branch_name>`


--------------------------------------------------------------------------
REFERENCE

COMMANDS:
  `cd` - change directory
  `mkdir` - make directory
  `curl` - makes a web request for a resource (like a file or webpage)
  `touch` - creates a file if it doesn't exist, or updates an existing
            file's "last touched" timestamp
  `echo` - prints text to the terminal (try it!)

  `nvm` - node version manager. there are many versions of node since new
          features are getting added to javascript all the time. it is
          useful to manage multiple versions because some projects are made
          for specific versions. ensures app run the same on different
          machines.
  `nvm install` - installs a new version of node
  `nvm use <version>` - switches to <version> or, if <version> isn't given,
                        will look for a `.nvmrc` file in current directory
                        and switches to that version (what LRA utilizes)

  `git` - version control manager. allows multiple versions of code to be
          saved and switched between at any time.
  `git clone` - clones a version of code from an external source onto your
                local machine
  `git fetch` - checks external source for any new code changes, including new
                and deleted branches and makes your local repo aware of them.
  `git pull` - this actually runs a `git fetch` behind the scenes, and then
               "pulls down" any code changes that exists externally onto your
               local machine. this is how you get new code on your machine.
  `git checkout <branch>` - this "checks out" a version of the code specific
                            to changes contained only in the <branch>

  `npm install` - installs/updates all project dependencies
  `npm start` - this spins up the application development server, allowing
                access to the app on your local machine
