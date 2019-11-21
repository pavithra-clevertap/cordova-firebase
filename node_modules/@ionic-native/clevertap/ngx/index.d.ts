import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name CleverTap
 * @description
 * Cordova Plugin that wraps CleverTap SDK for Android and iOS
 *
 * @usage
 * ```typescript
 * import { CleverTap } from '@ionic-native/clevertap/ngx';
 *
 * constructor(private clevertap: CleverTap) { }
 *
 * ```
 */
export declare class CleverTap extends IonicNativePlugin {
    /**
     * notify device ready
     * NOTE: in iOS use to be notified of launch Push Notification or Deep Link
     * in Android use only in android phonegap build projects
     * @returns {Promise<any>}
     */
    notifyDeviceReady(): Promise<any>;
    /*******************
     * Personalization
     ******************/
    /**
     * Personalization
     * Enables the Personalization API
     * @returns {Promise<any>}
     */
    enablePersonalization(): Promise<any>;
    /**
     * Enables tracking opt out for the currently active user.
     * @param optOut {boolean}
     * @returns {Promise<any>}
     */
    setOptOut(optOut: boolean): Promise<any>;
    /**
     * Enables the reporting of device network related information, including IP address.  This reporting is disabled by default.
     * @param enable {boolean}
     * @returns {Promise<any>}
     */
    enableDeviceNetworkInfoReporting(enable: boolean): Promise<any>;
    /*******************
     * Push
     ******************/
    /**
     * Registers for push notifications
     * @returns {Promise<any>}
     */
    registerPush(): Promise<any>;
    /**
     * Sets the device's push token
     * @param token {string}
     * @returns {Promise<any>}
     */
    setPushToken(token: string): Promise<any>;
    /**
     * Create Notification Channel for Android O+
     * @param channelID {string}
     * @param channelName {string}
     * @param channelDescription {string}
     * @param importance {number}
     * @param showBadge {boolean}
     * @returns {Promise<any>}
     */
    createNotificationChannel(channelID: string, channelName: string, channelDescription: string, importance: number, showBadge: boolean): Promise<any>;
    /**
     * Create Notification Channel for Android O+
     * @param channelID {string}
     * @param channelName {string}
     * @param channelDescription {string}
     * @param importance {number}
     * @param showBadge {boolean}
     * @param sound {string}
     * @returns {Promise<any>}
     */
    createNotificationChannelWithSound(channelID: string, channelName: string, channelDescription: string, importance: number, showBadge: boolean, sound: string): Promise<any>;
    /**
     * Create Notification Channel with Group ID for Android O+
     * @param channelID {string}
     * @param channelName {string}
     * @param channelDescription {string}
     * @param importance {number}
     * @param groupId {string}
     * @param showBadge {boolean}
     * @param sound {string}
     * @returns {Promise<any>}
     */
    createNotificationChannelWithGroupId(channelID: string, channelName: string, channelDescription: string, importance: number, groupId: string, showBadge: boolean): Promise<any>;
    /**
     * Create Notification Channel with Group ID for Android O+
     * @param channelID {string}
     * @param channelName {string}
     * @param channelDescription {string}
     * @param importance {number}
     * @param groupId {string}
     * @param showBadge {boolean}
     * @returns {Promise<any>}
     */
    createNotificationChannelWithGroupIdAndSound(channelID: string, channelName: string, channelDescription: string, importance: number, groupId: string, showBadge: boolean, sound: string): Promise<any>;
    /**
     * Create Notification Channel Group for Android O+
     * @param groupID {string}
     * @param groupName {string}
     * @returns {Promise<any>}
     */
    createNotificationChannelGroup(groupID: string, groupName: string): Promise<any>;
    /**
     * Delete Notification Channel for Android O+
     * @param channelID {string}
     * @returns {Promise<any>}
     */
    deleteNotificationChannel(channelID: string): Promise<any>;
    /**
     * Delete Notification Group for Android O+
     * @param groupID {string}
     * @returns {Promise<any>}
     */
    deleteNotificationChannelGroup(groupID: string): Promise<any>;
    /*******************
     * Events
     ******************/
    /**
     * Record Screen View
     * @param screenName {string}
     * @returns {Promise<any>}
     */
    recordScreenView(screenName: string): Promise<any>;
    /**
     * Record Event with Name
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    recordEventWithName(eventName: string): Promise<any>;
    /**
     *  Record Event with Name and Event properties
     * @param eventName {string}
     * @param eventProps {any}
     * @returns {Promise<any>}
     */
    recordEventWithNameAndProps(eventName: string, eventProps: any): Promise<any>;
    /**
     *  Record Charged Event with Details and Items
     * @param details {any}  object with transaction details
     * @param items {any}  array of items purchased
     * @returns {Promise<any>}
     */
    recordChargedEventWithDetailsAndItems(details: any, items: any): Promise<any>;
    /**
     * Get Event First Time
     * @param eventName {string}
     * callback returns epoch seconds or -1
     * @returns {Promise<any>}
     */
    eventGetFirstTime(eventName: string): Promise<any>;
    /**
     * Get Event Last Time
     * @param eventName {string}
     * callback returns epoch seconds or -1
     * @returns {Promise<any>}
     */
    eventGetLastTime(eventName: string): Promise<any>;
    /**
     * Get Event Number of Occurrences
     * @param eventName {string}
     * calls back with int or -1
     * @returns {Promise<any>}
     */
    eventGetOccurrences(eventName: string): Promise<any>;
    /**
     * Get Event Details
     * @param eventName {string}
     * calls back with object {"eventName": <string>, "firstTime":<epoch seconds>, "lastTime": <epoch seconds>, "count": <int>} or empty object
     * @returns {Promise<any>}
     */
    eventGetDetails(eventName: string): Promise<any>;
    /**
     * Get Event History
     * calls back with object {"eventName1":<event1 details object>, "eventName2":<event2 details object>}
     * @returns {Promise<any>}
     */
    getEventHistory(): Promise<any>;
    /*******************
     * Profiles
     ******************/
    /**
     * Get the device location if available.
     * On iOS:
     * Calling this will prompt the user location permissions dialog.
     * Please be sure to include the NSLocationWhenInUseUsageDescription key in your Info.plist.
     * Uses desired accuracy of kCLLocationAccuracyHundredMeters.
     * If you need background location updates or finer accuracy please implement your own location handling.
     * On Android:
     * Requires Location Permission in AndroidManifest e.g. "android.permission.ACCESS_COARSE_LOCATION"
     * You can use location to pass it to CleverTap via the setLocation API
     * for, among other things, more fine-grained geo-targeting and segmentation purposes.
     * Note: on iOS the call to CleverTapSDK must be made on the main thread due to LocationManager restrictions, but the CleverTapSDK method itself is non-blocking.
     * calls back with {lat:lat, lon:lon} lat and lon are floats
     * @returns {Promise<any>}
     */
    getLocation(): Promise<any>;
    /**
     * Set location
     * @param lat {number}
     * @param lon {number}
     * @returns {Promise<any>}
     */
    setLocation(lat: number, lon: number): Promise<any>;
    /**
     * Creates a separate and distinct user profile identified by one or more of Identity, Email, FBID or GPID values,
     * and populated with the key-values included in the profile dictionary.
     * If your app is used by multiple users, you can use this method to assign them each a unique profile to track them separately.
     * If instead you wish to assign multiple Identity, Email, FBID and/or GPID values to the same user profile,
     * use profileSet rather than this method.
     * If none of Identity, Email, FBID or GPID is included in the profile dictionary,
     * all properties values will be associated with the current user profile.
     * When initially installed on this device, your app is assigned an "anonymous" profile.
     * The first time you identify a user on this device (whether via onUserLogin or profileSet),
     * the "anonymous" history on the device will be associated with the newly identified user.
     * Then, use this method to switch between subsequent separate identified users.
     * Please note that switching from one identified user to another is a costly operation
     * in that the current session for the previous user is automatically closed
     * and data relating to the old user removed, and a new session is started
     * for the new user and data for that user refreshed via a network call to CleverTap.
     * In addition, any global frequency caps are reset as part of the switch.
     * @param profile {any} object
     * @returns {Promise<any>}
     */
    onUserLogin(profile: any): Promise<any>;
    /**
     * Set profile attributes
     * @param profile {any} object
     * @returns {Promise<any>}
     */
    profileSet(profile: any): Promise<any>;
    /**
     * Set profile attributes from facebook user
     * @param profile {any} facebook graph user object
     * @returns {Promise<any>}
     */
    profileSetGraphUser(profile: any): Promise<any>;
    /**
     * Set profile attributes rom google plus user
     * @param profile {any} google plus user object
     * @returns {Promise<any>}
     */
    profileGooglePlusUser(profile: any): Promise<any>;
    /**
     * Get User Profile Property
     * @param propertyName {string}
     * calls back with value of propertyName or false
     * @returns {Promise<any>}
     */
    profileGetProperty(propertyName: string): Promise<any>;
    /**
     * Get a unique CleverTap identifier suitable for use with install attribution providers.
     * calls back with unique CleverTap attribution identifier
     * @returns {Promise<any>}
     */
    profileGetCleverTapAttributionIdentifier(): Promise<any>;
    /**
     * Get User Profile CleverTapID
     * calls back with CleverTapID or false
     * @returns {Promise<any>}
     */
    profileGetCleverTapID(): Promise<any>;
    /**
     * Remove the property specified by key from the user profile
     * @param key {string}
     * @returns {Promise<any>}
     */
    profileRemoveValueForKey(key: string): Promise<any>;
    /**
     * Method for setting a multi-value user profile property
     * @param key {string}
     * @param values {any} array of strings
     * @returns {Promise<any>}
     */
    profileSetMultiValues(key: string, values: any): Promise<any>;
    /**
     * Method for adding a value to a multi-value user profile property
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    profileAddMultiValue(key: string, value: string): Promise<any>;
    /**
     * Method for adding values to a multi-value user profile property
     * @param key {string}
     * @param values {any} array of strings
     * @returns {Promise<any>}
     */
    profileAddMultiValues(key: string, values: any): Promise<any>;
    /**
     * Method for removing a value from a multi-value user profile property
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    profileRemoveMultiValue(key: string, value: string): Promise<any>;
    /**
     * Method for removing a value from a multi-value user profile property
     * @param key {string}
     * @param values {any} array of strings
     * @returns {Promise<any>}
     */
    profileRemoveMultiValues(key: string, values: any): Promise<any>;
    /*******************
     * Session
     ******************/
    /**
     * Get Session Elapsed Time
     * calls back with seconds
     * @returns {Promise<any>}
     */
    sessionGetTimeElapsed(): Promise<any>;
    /**
     * Get Session Total Visits
     * calls back with with int or -1
     * @returns {Promise<any>}
     */
    sessionGetTotalVisits(): Promise<any>;
    /**
     * Get Session Screen Count
     * calls back with with int
     * @returns {Promise<any>}
     */
    sessionGetScreenCount(): Promise<any>;
    /**
     * Get Session Previous Visit Time
     * calls back with with epoch seconds or -1
     * @returns {Promise<any>}
     */
    sessionGetPreviousVisitTime(): Promise<any>;
    /**
     * Get Sesssion Referrer UTM details
     * object {"source": <string>, "medium": <string>, "campaign": <string>} or empty object
     * @returns {Promise<any>}
     */
    sessionGetUTMDetails(): Promise<any>;
    /**
     * Call this to manually track the utm details for an incoming install referrer
     * @param source {string}
     * @param medium {string}
     * @param campaign {string}
     * @returns {Promise<any>}
     */
    pushInstallReferrer(source: string, medium: string, campaign: string): Promise<any>;
    /****************************
    * Notification Inbox methods
    ****************************/
    /**
     * Call this method to initialize the App Inbox
     */
    initializeInbox(): Promise<any>;
    /**
     * Call this method to get the count of unread Inbox messages
     */
    getInboxMessageUnreadCount(): Promise<any>;
    /**
     * Call this method to get the count of total Inbox messages
     */
    getInboxMessageCount(): Promise<any>;
    /**
     * Call this method to open the App Inbox
     * @param styleConfig : any or empty object
     */
    showInbox(styleConfig: any): Promise<any>;
    /*******************
     * Developer Options
     ******************/
    /**
     * 0 is off, 1 is info, 2 is debug, default is 1
     * @param level {number}
     * @returns {Promise<any>}
     */
    setDebugLevel(level: number): Promise<any>;
}
