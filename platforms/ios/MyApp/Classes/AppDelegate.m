#import "AppDelegate.h"
#import <CleverTapSDK/CleverTap.h>
#import <CleverTapSDK/CleverTapInstanceConfig.h>
#import <UserNotifications/UserNotifications.h>

@interface AppDelegate ()

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    // register for push notifications
    [self registerPush];
    
    // Configure and init the default shared CleverTap instance, (add CleverTap Account ID and Account Token in your .plist file)
    #ifdef DEBUG
        [CleverTap setDebugLevel:CleverTapLogDebug];
    #endif
    [CleverTap autoIntegrate];
    
    // Configure and init an additional instance
//    CleverTapInstanceConfig *ctConfig = [[CleverTapInstanceConfig alloc] initWithAccountId:@"R65-RR9-9R5Z" accountToken:@"c22-562"];
//    ctConfig.logLevel = CleverTapLogDebug;
//    CleverTap *additionalCleverTapInstance = [CleverTap instanceWithConfig:ctConfig];
//    NSLog(@"Additional CleverTap instance created for accountID: %@", additionalCleverTapInstance.config.accountId);
    return YES;
}

- (void)registerPush {
   
    UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
    
    [center requestAuthorizationWithOptions:(UNAuthorizationOptionSound | UNAuthorizationOptionAlert | UNAuthorizationOptionBadge) completionHandler:^(BOOL granted, NSError * _Nullable error){
        if( !error ){
            dispatch_async(dispatch_get_main_queue(), ^(void) {
                [[UIApplication sharedApplication] registerForRemoteNotifications];
            });
        }
    }];
}

@end

