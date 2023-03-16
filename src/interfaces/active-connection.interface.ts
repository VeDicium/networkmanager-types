import { ConnectionPath } from './connection.interface';
import { DevicePath } from './device.interface';
import { Dhcp4ConfigPath } from './dhcp4-config.interface';
import { Dhcp6ConfigPath } from './dhcp6-config.interface';
import { Ip4ConfigPath } from './ip4-config.interface';
import { Ip6ConfigPath } from './ip6-config.interface';

/**
 * Path to Active Connection configuration file.
 */
export type ActiveConnectionPath = string;

/**
 * ActiveConnectionState values indicate the state of a connection to a specific network while it is starting, connected, or disconnecting from that network (NMActiveConnectionState).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMActiveConnectionState
 */
export enum ActiveConnectionState {
  /**
   * The state of the connection is unknown.
   */
  UNKNOWN = 0,

  /**
   * A network connection is being prepared
   */
  ACTIVATING = 1,

  /**
   * There is a connection to the network
   */
  ACTIVATED = 2,

  /**
   * The network connection is being torn down and cleaned up
   */
  DEACTIVATING = 3,

  /**
   * The network connection is disconnected and will be removed
   */
  DEACTIVATED = 4,
}

/**
 * Active connection state reasons (NMActiveConnectionStateReason).
 *
 * Since: 1.8
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMActiveConnectionStateReason
 */
export enum ActiveConnectionStateReason {
  /**
   * The reason for the active connection state change is unknown.
   */
  UNKNOWN = 0,

  /**
   * No reason was given for the active connection state change.
   */
  NONE = 1,

  /**
   * The active connection changed state because the user disconnected it.
   */
  USER_DISCONNECTED = 2,

  /**
   * The active connection changed state because the device it was using was disconnected.
   */
  DEVICE_DISCONNECTED = 3,

  /**
   * The service providing the VPN connection was stopped.
   */
  SERVICE_STOPPED = 4,

  /**
   * The IP config of the active connection was invalid.
   */
  IP_CONFIG_INVALID = 5,

  /**
   * The connection attempt to the VPN service timed out.
   */
  CONNECT_TIMEOUT = 6,

  /**
   * A timeout occurred while starting the service providing the VPN connection.
   */
  SERVICE_START_TIMEOUT = 7,

  /**
   * Starting the service providing the VPN connection failed.
   */
  SERVICE_START_FAILED = 8,

  /**
   * Necessary secrets for the connection were not provided.
   */
  NO_SECRETS = 9,

  /**
   * Authentication to the server failed.
   */
  LOGIN_FAILED = 10,

  /**
   * The connection was deleted from settings.
   */
  CONNECTION_REMOVED = 11,

  /**
   * Master connection of this connection failed to activate.
   */
  DEPENDENCY_FAILED = 12,

  /**
   * Could not create the software device link.
   */
  DEVICE_REALIZE_FAILED = 13,

  /**
   * The device this connection depended on disappeared.
   */
  DEVICE_REMOVED = 14,
}

/**
 * Flags describing the current activation state (NMActivationStateFlags).
 *
 * Since: 1.10
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMActivationStateFlags
 */
export enum ActivationStateFlags {
  /**
   * An alias for numeric zero, no flags set.
   */
  NONE = 0,

  /**
   * The device is a master.
   */
  IS_MASTER = 0x1,

  /**
   * The device is a slave.
   */
  IS_SLAVE = 0x02,

  /**
   * Layer2 is activated and ready.
   */
  LAYER2_READY = 0x4,

  /**
   * IPv4 setting is completed.
   */
  IP4_READY = 0x8,

  /**
   * IPv6 setting is completed.
   */
  IP6_READY = 0x10,

  /**
   * The master has any slave devices attached.
   * This only makes sense if the device is a master.
   */
  MASTER_HAS_SLAVES = 0x20,

  /**
   * The lifetime of the activation is bound to the visibility of the connection profile, which in turn depends on "connection.permissions" and whether a session for the user exists.
   * Since: 1.16.
   */
  LIFETIME_BOUND_TO_PROFILE_VISIBILITY = 0x40,

  /**
   * The active connection was generated to represent an external configuration of a networking device.
   * Since: 1.26.
   */
  EXTERNAL = 0x80,
}

/**
 * Properties of Active Connection (org.freedesktop.NetworkManager.Connection.Active).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.Connection.Active.html
 */
export interface ActiveConnectionProperties {
  /**
   * The path of the connection.
   */
  Connection: ConnectionPath;

  /**
   * A specific object associated with the active connection.
   * This property reflects the specific object used during connection activation, and will not change over the lifetime of the ActiveConnection once set.
   */
  SpecificObject: string;

  /**
   * The ID of the connection, provided as a convenience so that clients do not have to retrieve all connection details.
   */
  Id: string;

  /**
   * The UUID of the connection, provided as a convenience so that clients do not have to retrieve all connection details.
   */
  Uuid: string;

  /**
   * The type of the connection, provided as a convenience so that clients do not have to retrieve all connection details.
   */
  Type: string;

  /**
   * Array of object paths representing devices which are part of this active connection.
   */
  Devices: Array<DevicePath>;

  /**
   * The state of this active connection.
   */
  State: ActiveConnectionState;

  /**
   * The state flags of this active connection.
   *
   * @see ActivationStateFlags
   */
  StateFlags: number;

  /**
   * Whether this active connection is the default IPv4 connection, i.e. whether it currently owns the default IPv4 route.
   */
  Default: boolean;

  /**
   * Object path of the Ip4Config object describing the configuration of the connection.
   * Only valid when the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
   */
  Ip4Config: Ip4ConfigPath;

  /**
   * Object path of the Dhcp4Config object describing the DHCP options returned by the DHCP server (assuming the connection used DHCP).
   * Only valid when the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
   */
  Dhcp4Config: Dhcp4ConfigPath;

  /**
   * Whether this active connection is the default IPv6 connection, i.e. whether it currently owns the default IPv6 route.
   */
  Default6: boolean;

  /**
   * Object path of the Ip6Config object describing the configuration of the connection.
   * Only valid when the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
   */
  Ip6Config: Ip6ConfigPath;

  /**
   * Object path of the Dhcp6Config object describing the DHCP options returned by the DHCP server (assuming the connection used DHCP).
   * Only valid when the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
   */
  Dhcp6Config: Dhcp6ConfigPath;

  /**
   * Whether this active connection is also a VPN connection.
   */
  Vpn: boolean;

  /**
   * The path to the master device if the connection is a slave.
   */
  Master: string;
}
