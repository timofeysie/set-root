## Set Root

This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.
It uses that tabs starter.

After having a problem with the set root function, I created this project to demonstrate the issue:

[This issue is still open](https://github.com/ionic-team/ionic-app-scripts/issues/919)
*donaldruby opened this issue on 26 Apr*

*jackletterman commented 14 days ago
Same Issue here, cannot get singleton service to work like referenced in documentation*

It's been open for about four months.

[Another issue](https://github.com/ionic-team/ionic/issues/5960)
using setRoot every time you navigate to a page from the menu is gonna "reset" that page every time it is navigated too because its setting it as root, therefore causing it to be constructed every time it is navigated too.

We're using setRoot to init the navigation stack after a login or a logout, and the post-login controller is initialized 3 times in a row after a login - logout - login cycle.

Someone offered [this workaround](https://forum.ionicframework.com/t/after-setroot-tabspage-the-default-tab-page-appears-twice/71770/10)

This workaround goes as such:
```
import { NgZone } from '@angular/core';
constructor(private zone: NgZone) { ... }
```
Where you call setRoot:
```
this.zone.run(() => {
    this.navCtrl.setRoot(TabsPage);
});
```

But this does not work for us.

Another [issue](https://github.com/ionic-team/ionic/issues/9401)

rapropos states: *Using Zone.run is virtually always papering over a more serious problem. I strongly urge people not to be satisfied with it and instead search for the root cause of their underlying issue.*

But there is no other solution.

Using this.nav.popToRoot() has the same problem.
So even without the setRoot() call, we have a problem.

But, after trying to demonstrate this problem, I was unable to.
This project runs fine.
You can login, and logout from the home page.
I thought you had to logout from the same page that is the root, which would be the tabs class.
However, after getting ready to use the emitter service to communicate before pages, the logout from the home page class just worked, so, I'm not sure what's going on now.


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

To push commits to GitHub:
```
git push -u origin master
```


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

