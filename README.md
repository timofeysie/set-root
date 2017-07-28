This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.


## a full list of Ionic commands. 
You can also see the list on the command line with ionic --help.

Command	Description
docs	Open the Ionic documentation website
generate	Generate pipes, components, pages, directives, providers, and tabs (ionic-angular >= 3.0.0)
info	Print system/environment info
link	Connect your local app to Ionic
login	Login with your Ionic ID
serve	Start a local dev server for app dev/testing
signup	Create an Ionic account
start	Create a new project
telemetry	Opt in and out of telemetry
upload	Upload a new snapshot of your app
config get	Print config values
config set	Set config values
cordova build	Build (prepare + compile) an Ionic project for a given platform
cordova compile	Compile native platform code
cordova emulate	Emulate an Ionic project on a simulator or emulator
cordova platform	Manage Cordova platform targets
cordova plugin	Manage Cordova plugins
cordova prepare	Copies assets to Cordova platforms, preparing them for native builds
cordova resources	Automatically create icon and splash screen resources
cordova run	Run an Ionic project on a connected device
package build	Start a package build
package download	Download your packaged app
package info	Get info about a build
package list	List your cloud builds


## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

