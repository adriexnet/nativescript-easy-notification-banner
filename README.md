# EasyNotificationBanner
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![TotalDownloads][total-downloads-image]][npm-url]

[npm-image]:http://img.shields.io/npm/v/nativescript-easy-notification-banner.svg
[npm-url]:https://npmjs.org/package/nativescript-easy-notification-banner
[downloads-image]:http://img.shields.io/npm/dm/nativescript-easy-notification-banner.svg
[total-downloads-image]:http://img.shields.io/npm/dt/nativescript-easy-notification-banner.svg?label=total%20downloads

A way to keep the user informed about what happens in your application

![Sample iOS](https://github.com/adriexnet/nativescript-easy-notification-banner/blob/master/screenshots/ios.gif?raw=true)



## Installation


```javascript
tns plugin add nativescript-easy-notification-banner
```

## Usage 

```javascript
import { Component, OnInit } from '@angular/core';
import { EasyNotificationBanner } from 'nativescript-easy-notification-banner';

@Component({
  selector: 'ad-main',
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {
  private notificationBanner: EasyNotificationBanner;
  constructor() {
    this.notificationBanner = new EasyNotificationBanner();
  }

  ngOnInit(){
    this.notificationBanner.showSuccess('Celebrate!', 'A new version is available')
      .then(() => console.log('this is really easy!'))
    ;
   }
}
```
    
## TODO

```
- [] allow custom design
- [] allow custom duration
- [] enable buttons inside the banner
- [] support for banner position (RMessagePositionTop, RMessagePositionNavBarOverlay, RMessagePositionBottom)
```

Contributions are welcome! :)

## Donate
`bitcoin:1EAqBrcWKGS3VG1ktUxCje2E6hYTQRHRRV`

![donate](https://github.com/adriexnet/nativescript-easy-notification-banner/blob/master/screenshots/donate.png?raw=true)

also [greenaddress](https://greenaddress.it/pay/GAkvTDFTMKQmXYSc2BddzSEAWdHhx/)

## License

Apache License Version 2.0, January 2004
