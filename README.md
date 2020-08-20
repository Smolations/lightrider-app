# Lightrider App
A character management and in-game utility for the Lightrider TTRPG.

---

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


### Step 1 (one-time): Create projects folder

You can do this with **Finder**, but you might want to get used to using your
terminal. You'll need help with the latter, so I'll provide those instructions
throughout this README.

// - create `projects` folder using finder OR (if putting folder in
//   your home folder):
$ cd ~
$ mkdir projects


// STEP 2 (one-time): install node version manager (`nvm`)
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash


// STEP 3 (one-time): make sure `nvm` loads in each new terminal window. to
// achieve this, we need to make sure a file exists that gets automatically
// loaded by terminal every time it runs. this file may or may not already
// exist on your machine.
$ cd ~
$ touch .profile

// - open new file in your favorite text editor. to see hidden files (like
// dotfiles), with finder open, press cmd+shift+. (command+shift+<period>).
// - find `.profile` and drag it to your editor on your dock OR right-click
// and choose "Open With..." and choose your preferred editor. then paste
// the following (only content _between_ triple backticks):
```
echo "-> ~/.profile"
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

// close terminal and open it again. as it loads, you should see "-> ~/.profile" spit out at the top.
// verify that `nvm` is loaded by typing (should not error):
$ nvm ls


// STEP 4 (one-time): install "correct" node version.
// - for simplicity, i'll just specify the version here. in the future, the
//   version is specified by a file in the project itself.
$ nvm install 10.20.1


// STEP 5 (one-time) clone repository (get the app files on your machine)
// - visit repository: https://github.com/Smolations/lightrider-app
// - click the green "Code" button near the top and click the "Use HTTPS"
//   link in the resulting overlay
// - click the clipboard icon next to url to copy to clipboard or manually
//   select url text and copy to clipboard
// - back to your terminal window and paste url for `git clone` command:
$ cd ~/projects
$ git clone https://github.com/Smolations/lightrider-app.git


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
