var NotificationBanner = require("nativescript-notification-banner").NotificationBanner;
var notificationBanner = new NotificationBanner();

describe("greet function", function() {
    it("exists", function() {
        expect(notificationBanner.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(notificationBanner.greet()).toEqual("Hello, NS");
    });
});