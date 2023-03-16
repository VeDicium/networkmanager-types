import { ActiveConnectionPath } from './active-connection.interface';
import { DevicePath } from './device.interface';

/**
 * Values indicate the current overall networking state (NMState).
 * Useful for graphical applications that want to reflect the overall state of network connectivity.
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMState
 */
export enum NetworkManagerState {
  /**
   * Networking state is unknown.
   * This indicates a daemon error that makes it unable to reasonably assess the state.
   * In such event the applications are expected to assume Internet connectivity might be present and not disable controls that require network access.
   * The graphical shells may hide the network accessibility indicator altogether since no meaningful status indication can be provided.
   */
  UNKNOWN = 0,

  /**
   * Networking is not enabled, the system is being suspended or resumed from suspend.
   */
  ASLEEP = 10,

  /**
   * There is no active network connection.
   * The graphical shell should indicate no network connectivity and the applications should not attempt to access the network.
   */
  DISCONNECTED = 20,

  /**
   * Network connections are being cleaned up.
   * The applications should tear down their network sessions.
   */
  DISCONNECTING = 30,

  /**
   * A network connection is being started The graphical shell should indicate the network is being connected while the applications should still make no attempts to connect the network.
   */
  CONNECTING = 40,

  /**
   * There is only local IPv4 and/or IPv6 connectivity, but no default route to access the Internet.
   * The graphical shell should indicate no network connectivity.
   */
  CONNECTED_LOCAL = 50,

  /**
   * There is only site-wide IPv4 and/or IPv6 connectivity.
   * This means a default route is available, but the Internet connectivity check (see "Connectivity" property) did not succeed.
   * The graphical shell should indicate limited network connectivity.
   */
  CONNECTED_SITE = 60,

  /**
   * There is global IPv4 and/or IPv6 Internet connectivity.
   * This means the Internet connectivity check succeeded, the graphical shell should indicate full network connectivity.
   */
  CONNECTED_GLOBAL = 70,
}

/**
 * The state of a connection
 * Useful for graphical applications that want to handle specific connection scenarios
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMConnectivityState
 */
export enum ConnectivityState {
  /**
   * Network connectivity is unknown.
   * This means the connectivity checks are disabled (e.g. on server installations) or has not run yet.
   * The graphical shell should assume the Internet connection might be available and not present a captive portal window.
   */
  UNKNOWN = 0,

  /**
   * The host is not connected to any network.
   * There's no active connection that contains a default route to the internet and thus it makes no sense to even attempt a connectivity check.
   * The graphical shell should use this state to indicate the network connection is unavailable.
   */
  NONE = 1,

  /**
   * The Internet connection is hijacked by a captive portal gateway.
   * The graphical shell may open a sandboxed web browser window (because the captive portals typically attempt a man-in-the-middle attacks against the https connections) for the purpose of authenticating to a gateway and retrigger the connectivity check with CheckConnectivity() when the browser window is dismissed.
   */
  PORTAL = 2,

  /**
   * The host is connected to a network, does not appear to be able to reach the full Internet, but a captive portal has not been detected.
   */
  LIMITED = 3,

  /**
   * The host is connected to a network, and appears to be able to reach the full Internet.
   */
  FULL = 4,
}

/**
 * Indicates whether or not a connection is Metered
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMMetered
 */
export enum Metered {
  /**
   * The metered status is unknown
   */
  UNKNOWN = 0,

  /**
   * Metered, the value was explicitly configured
   */
  YES = 1,

  /**
   * Not metered, the value was explicitly configured
   */
  NO = 2,

  /**
   * Metered, the value was guessed
   */
  GUESS_YES = 3,

  /**
   * Not metered, the value was guessed
   */
  GUESS_NO = 4,
}

/**
 * Connection Manager properties.
 *
 * @see https://developer.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.html
 */
export type NetworkManagerProperties = {
  /**
   * List of realized network devices.
   *
   * Realized devices are those which have backing resources.
   */
  Devices: Array<DevicePath>;

  /**
   * List of all realized and un-realized network devices.
   *
   * Un-realized devices are software devices which do not yet have backing resources, but for which backing resources can be created if the device is activated.
   */
  AllDevices: Array<DevicePath>;

  /**
   * The list of active checkpoints.
   */
  Checkpoints: Array<any>;

  /**
   * Indicates if overall networking is currently enabled or not.
   * See the Enable() method.
   */
  NetworkingEnables: boolean;

  /**
   * Indicates if wireless is currently enabled or not.
   */
  WirelessEnabled: boolean;

  /**
   * Indicates if the wireless hardware is currently enabled, i.e. the state of the RF kill switch.
   */
  WirelessHardwareEnabled: boolean;

  /**
   * Indicates if mobile broadband devices are currently enabled or not.
   */
  WwanEnabled: boolean;

  /**
   * Indicates if the mobile broadband hardware is currently enabled, i.e. the state of the RF kill switch. *
   */
  WwanHardwareEnabled: boolean;

  /**
   * List of active connection object paths.
   */
  ActiveConnections: Array<ActiveConnectionPath>;

  /**
   * The object path of the "primary" active connection being used to access the network.
   * In particular, if there is no VPN active, or the VPN does not have the default route, then this indicates the connection that has the default route.
   * If there is a VPN active with the default route, then this indicates the connection that contains the route to the VPN endpoint.
   */
  PrimaryConnection: ActiveConnectionPath;

  /**
   * The connection type of the "primary" active connection being used to access the network.
   * This is the same as the Type property on the object indicated by PrimaryConnection.
   */
  PrimaryConnectionType: string;

  /**
   * Indicates whether the connectivity is metered.
   * This is equivalent to the metered property of the device associated with the primary connection
   */
  Metered: Metered;

  /**
   * The object path of an active connection that is currently being activated and which is expected to become the new PrimaryConnection when it finishes activating.
   */
  ActivatingConnection: ActiveConnectionPath;

  /**
   * Indicates whether NM is still starting up; this becomes FALSE when NM has finished attempting to activate every connection that it might be able to activate at startup.
   */
  Startup: boolean;

  /**
   * NetworkManager version.
   */
  Version: string;

  /**
   * The current set of capabilities. See NMCapability for currently defined capability numbers.
   * The array is guaranteed to be sorted in ascending order without duplicates.
   */
  Capabilities: Array<number>;

  /**
   * The overall state of the NetworkManager daemon.
   * This takes state of all active connections and the connectivity state into account to produce a single indicator of the network accessibility status.
   * The graphical shells may use this property to provide network connection status indication and applications may use this to check if Internet connection is accessible.
   * Shell that is able to cope with captive portals should use the "Connectivity" property to decide whether to present a captive portal authentication dialog.
   */
  state: NetworkManagerState;

  /**
   * The result of the last connectivity check.
   * The connectivity check is triggered automatically when a default connection becomes available, periodically and by calling a CheckConnectivity() method.
   * This property is in general useful for the graphical shell to determine whether the Internet access is being hijacked by an authentication gateway (a "captive portal").
   * In such case it would typically present a web browser window to give the user a chance to authenticate and call CheckConnectivity() when the user submits a form or dismisses the window.
   * To determine the whether the user is able to access the Internet without dealing with captive portals (e.g. to provide a network connection indicator or disable controls that require Internet access), the "State" property is more suitable.
   * */
  Connectivity: ConnectivityState;

  /**
   * Indicates whether connectivity checking service has been configured. This may return true even if the service is not currently enabled.
   * This is primarily intended for use in a privacy control panel, as a way to determine whether to show an option to enable/disable the feature.
   */
  ConnectivityCheckAvailable: boolean;

  /**
   * Indicates whether connectivity checking is enabled.
   * This property can also be written to to disable connectivity checking (as a privacy control panel might want to do).
   */
  ConnectivityCheckEnabled: boolean;

  /**
   * The URI that NetworkManager will hit to check if there is internet connectivity.
   */
  ConnectivityCheckUri: string;

  /**
   * Dictionary of global DNS settings where the key is one of "searches", "options" and "domains".
   * The values for the "searches" and "options" keys are string arrays describing the list of search domains and resolver options, respectively.
   * The value of the "domains" key is a second-level dictionary, where each key is a domain name, and each key's value is a third-level dictionary with the keys "servers" and "options".
   * "servers" is a string array of DNS servers, "options" is a string array of domain-specific options.
   */
  GlobalDnsConfiguration: any;
};
