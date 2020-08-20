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


## Managing the project

The rest of the commands below are used to accomplish various tasks, some in any
order, and will soon become second nature to you. I know you're eager to get going,
though, so I'll start with the most relevant commands given where the last section
left off.


**Navigating to the project folder in terminal.** This needs to be first since the
rest of the commands need to be run from _within the repository (project) folder_.
``
$ cd ~/projects/lightrider-app
``


**Ensuring correct node version is used.** This command uses the aforementioned
`.nvmrc` file at the root of the project to switch to the correct version. If you
get an error saying that the version hasn't been installed, install it (see previous
section on installing `nvm`).
```
$ nvm use
```

**Install/Refresh project dependencies.** Some changes add code that needs to be
installed. Some removes that kind of code. And some just update that code. You will
probably not be aware of when this happens, so it's safer to just run this command
every time you pull down new code or change branches. `npm` is similar to `nvm` in
that it manages packages for a single app as opposed to versions of software on
a single _machine_.
```
$ npm install
```

**Start the app.** Spins up the server and opens a browser tab for it. If you ever
accidentally close this tab, look at the output of this command for the correct url.
To halt this server process, you can press `ctrl`+`c`.
```
$ npm start
```

**Switching branches.** All code is under _version control_. We use a software named
[Git](https://git-scm.com/). These different versions are contained in what are
called "branches". One branch might contain code that results in some header reading
"Name the Game" while another branch might have different code that renders
"The Name of the Game" instead. You can switch between branches freely to get access
to all sorts of different versions.

Since all code lives in a branch, there needs to be a "main" branch which contains
the final, finished product. This branch is branch into which all other branches
get merged when their respective changes are considered "complete." Most commonly,
including in this project, that branch is named `master`. This is the branch you
are on right after you clone this repository. Generally, you'll stay on this branch
most of the time, but you may sometimes switch branches to see a particular feature
that has not been merged. Below is how you can checkout the `master` branch, but
you can checkout _any_ branch simply by changing the branch name:
```
$ git checkout master
```

**Check current code status.** When you have made code changes in a branch, the
affected files are said to be _modified_. You may also need to know what branch
you are currently on or if there are changes you haven't yet pulled down to
your local project. To check the status, issue the following command:
```
$ git status
```

**Become aware of recent changes from repository.** Your local project has to
periodically "check in" with the github project in order to become aware of new
changes to your current branch, other branches, and various other changes we don't
need to get into at the moment. The following command allows you to do that:
```
$ git fetch
```

After running this command, you can run a `git status` to see if your branch is
"behind" the branch on github. The next command illustrates how tto pull those
changes down to your local project.

**Pull down recent changes from repository.** Once you are aware that there are
new changes on your current branch, you can "pull" those changes down with the
following command (coincidentally, this command runs a `git fetch` behind the
scenes, so you can often skip  that step when you're on the `master` branch):
```
$ git pull
```

Let's say that a current task is finished, but the developer wants you to take
a look at it (that is, run the app using code in  another branch) before it gets
merged into the `master` branch. Here's the process:

1. determine the branch name (represented by `<branch_name>` in snippet below)
2. make your local project aware of most recent changes/branches in github
3. checkout the branch locally
4. install project dependencies
5. start the server and play with the app

And here are the commands:
```
$ git fetch
$ git checkout <branch_name>
$ npm install
$ npm start
```

Requests for merges are called _pull requests_ (PRs) in github. You can view all of
the open pull requests by clicking the **Pull Requests** tab in this project.
If you want to play with the app using the code from one these PRs,
you need the branch name. Clicking any PR will open it in a new view
that allows you to see a description of the change, as well as the code changes
happening in that branch (in case you're interested). You can see the branch name
underneath the PR title.

Once you're done playing with changes ina branch, you'll  likely want to move back
to the `master` branch. Just press `ctrl`+`c` to  stop  the server, then you can
simply checkout the  `master` branch.


## REFERENCE

| Command        | Description |
| -----------    | ----------- |
|  `cd`          | change directory
|  `mkdir`       | make directory
|  `curl`        | makes a web request for a resource (like a file or webpage)
|  `touch`       | creates a file if it doesn't exist, or updates an existing file's "last touched" timestamp
|  `echo`        | prints text to the terminal (try it!)
|  `nvm`         | node version manager. there are many versions of node since new features are getting added to javascript all the time. it is useful to manage multiple versions because some projects are made for specific versions. ensures app run the same on different machines.
|  `nvm install` | installs a new version of node
|  `nvm use <version>` | switches to `<version>` or, if `<version>` isn't given, will look for a `.nvmrc` file in current directory and switches to that version (what LRA utilizes)
|  `git`         | version control manager. allows multiple versions of code to be saved and switched between at any time.
|  `git clone`   | clones a version of code from an external source onto your local machine
|  `git fetch`   | checks external source for any new code changes, including new and deleted branches and makes your local repo aware of them.
|  `git pull`    | this actually runs a `git fetch` behind the scenes, and then "pulls down" any code changes that exists externally onto your local machine. this is how you get new code on your machine.
|  `git checkout <branch>` | this "checks out" a version of the code specific to changes contained only in the `<branch>`
|  `npm install` | installs/updates all project dependencies
|  `npm start`   | this spins up the application development server, allowing access to the app on your local machine. stopthe process with `ctrl`+`c`
