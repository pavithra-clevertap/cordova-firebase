#import "AppDelegate.h"
//#import <CleverTapSDK/CleverTap.h>
//#import <CleverTapSDK/CleverTapInstanceConfig.h>
//#import <UserNotifications/UserNotifications.h>

@interface AppDelegate ()

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    // register for push notifications
    
    // Configure and init the default shared CleverTap instance, (add CleverTap Account ID and Account Token in your .plist file)
 
    
    // Configure and init an additional instance
//    CleverTapInstanceConfig *ctConfig = [[CleverTapInstanceConfig alloc] initWithAccountId:@"R65-RR9-9R5Z" accountToken:@"c22-562"];
//    ctConfig.logLevel = CleverTapLogDebug;
//    CleverTap *additionalCleverTapInstance = [CleverTap instanceWithConfig:ctConfig];
//    NSLog(@"Additional CleverTap instance created for accountID: %@", additionalCleverTapInstance.config.accountId);
    return YES;
}



@end

