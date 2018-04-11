import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AdMob } from '@ionic-native/admob';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  options : any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private admob: AdMob) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      var admobid: {
        banner: string,
        interstitial: string,
        Rewarded: string
      };
      if (/(android)/i.test(navigator.userAgent)) {
        admobid = { // for Android
          banner: 'ca-app-pub-6986673151840697/8989287830',
          interstitial: 'ca-app-pub-6986673151840697/2604468575',
          Rewarded: 'ca-app-pub-6986673151840697/4848677905'
        };
      } else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)){
        admobid = { // for iOS
          banner: 'ca-app-pub-6986673151840697/8989287830',
          interstitial: 'ca-app-pub-6986673151840697/2604468575',
          Rewarded: 'ca-app-pub-6986673151840697/4848677905'
        };
      }
     // window.analytics.startTrackerWithId("UA-97421936-1");
      this.admob.createBanner({
        adId: admobid.banner,
        isTesting: false,//comment this out before publishing the app
        autoShow: true
      })


      setInterval(()=>{
        this.admob.prepareInterstitial({
          adId: admobid.interstitial,
          isTesting: false, //comment this out before publishing the app
          autoShow: true
        });
        console.log("call video");
      },10000);



      setInterval(()=>{
        this.admob.prepareRewardVideoAd({
          adId: admobid.Rewarded,
          isTesting: false, //comment this out before publishing the app
          autoShow: true
        });
        console.log("call video");
      },20000);



      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}
