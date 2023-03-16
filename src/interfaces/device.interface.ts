import { ActiveConnectionPath } from './active-connection.interface';
import { ConnectionPath } from './connection.interface';
import { Dhcp4ConfigPath } from './dhcp4-config.interface';
import { Dhcp6ConfigPath } from './dhcp6-config.interface';
import { Ip4ConfigPath } from './ip4-config.interface';
import { Ip6ConfigPath } from './ip6-config.interface';
import { ConnectivityState, Metered } from './network-manager.interface';

/**
 * Path to Device configuration file.
 */
export type DevicePath = string;

/**
 * The type of hardware represented by a device object (NMDeviceType).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMDeviceType
 */
export enum DeviceType {
  /**
   * Unknown device
   */
  UNKNOWN = 0,

  /**
   * Generic support for unrecognized device types
   */
  GENERIC = 14,

  /**
   * A wired ethernet device
   */
  ETHERNET = 1,

  /**
   * An 802.11 Wi-Fi device
   */
  WIFI = 2,

  /**
   * Not used
   */
  UNUSED1 = 3,

  /**
   * Not used
   */
  UNUSED2 = 4,

  /**
   * A Bluetooth device supporting PAN or DUN access protocols
   */
  BT = 5,

  /**
   * An OLPC XO mesh networking device
   */
  OLPC_MESH = 6,

  /**
   * An 802.16e Mobile WiMAX broadband device
   */
  WIMAX = 7,

  /**
   * A modem supporting analog telephone, CDMA/EVDO, GSM/UMTS, or LTE network access protocols
   */
  MODEM = 8,

  /**
   * An IP-over-InfiniBand device
   */
  INFINIBAND = 9,

  /**
   * A bond master interface
   */
  BOND = 10,

  /**
   * An 802.1Q VLAN interface
   */
  VLAN = 11,

  /**
   * ADSL modem
   */
  ADSL = 12,

  /**
   * A bridge master interface
   */
  BRIDGE = 13,

  /**
   * A team master interface
   */
  TEAM = 15,
  /**
   * A TUN or TAP interface
   */
  TUN = 16,

  /**
   * A IP tunnel interface
   */
  IP_TUNNEL = 17,

  /**
   * A MACVLAN interface
   */
  MACVLAN = 18,

  /**
   * A VXLAN interface
   */
  VXLAN = 19,

  /**
   * A VETH interface
   */
  VETH = 20,

  /**
   * A MACsec interface
   */
  MACSEC = 21,

  /**
   * A dummy interface
   */
  DUMMY = 22,

  /**
   * A PPP interface
   */
  PPP = 23,

  /**
   * A Open vSwitch interface
   */
  OVS_INTERFACE = 24,

  /**
   * A Open vSwitch port
   */
  OVS_PORT = 25,

  /**
   * A Open vSwitch bridge
   */
  OVS_BRIDGE = 26,

  /**
   * A IEEE 802.15.4 (WPAN) MAC Layer Device
   */
  WPAN = 27,

  /**
   * 6LoWPAN interface
   */
  LOWPAN = 28,

  /**
   * A WireGuard interface
   */
  WIREGUARD = 29,

  /**
   * An 802.11 Wi-Fi P2P device
   */
  WIFI_P2P = 30,

  /**
   * A VRF (Virtual Routing and Forwarding) interface
   */
  VRF = 31,
}

/**
 * The state of a device managed by Network Manager (i.e. ethernet or wifi state) (NMDeviceState).
 * Useful for reflecting the overall state of an ethernet or wifi device
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMDeviceState
 */
export enum DeviceState {
  /**
   * The device's state is unknown
   */
  UNKNOWN = 0,
  /**
   * The device is recognized, but not managed by NetworkManager
   */
  UNMANAGED = 10,

  /**
   * The device is managed by NetworkManager, but is not available for use.
   * Reasons may include the wireless switched off, missing firmware, no ethernet carrier, missing supplicant or modem manager, etc.
   */
  UNAVAILABLE = 20,

  /**
   * The device can be activated, but is currently idle and not connected to a network.
   */
  DISCONNECTED = 30,

  /**
   * The device is preparing the connection to the network.
   * This may include operations like changing the MAC address, setting physical link properties, and anything else required to connect to the requested network.
   */
  PREPARE = 40,

  /**
   * The device is connecting to the requested network.
   * This may include operations like associating with the Wi-Fi AP, dialing the modem, connecting to the remote Bluetooth device, etc.
   */
  CONFIG = 50,

  /**
   * The device requires more information to continue connecting to the requested network.
   * This includes secrets like WiFi passphrases, login passwords, PIN codes, etc.
   */
  NEED_AUTH = 60,

  /**
   * The device is requesting IPv4 and/or IPv6 addresses and routing information from the network.
   */
  IP_CONFIG = 70,

  /**
   * The device is checking whether further action is required for the requested network connection.
   * This may include checking whether only local network access is available, whether a captive portal is blocking access to the Internet, etc.
   */
  IP_CHECK = 80,

  /**
   * The device is waiting for a secondary connection (like a VPN) which must activated before the device can be activated
   */
  SECONDARIES = 90,

  /**
   * The device has a network connection, either local or global.
   */
  ACTIVATED = 100,

  /**
   * A disconnection from the current network connection was requested, and the device is cleaning up resources used for that connection.
   * The network connection may still be valid.
   */
  DEACTIVATING = 110,

  /**
   * The device failed to connect to the requested network and is cleaning up the connection request
   */
  FAILED = 120,
}

/**
 * Device state change reason codes (NMDeviceStateReason).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMDeviceStateReason
 */
export enum DeviceStateReason {
  /**
   * No reason given
   */
  REASON_NONE = 0,

  /**
   * Unknown error
   */
  REASON_UNKNOWN = 1,

  /**
   * Device is now managed
   */
  REASON_NOW_MANAGED = 2,

  /**
   * Device is now unmanaged
   */
  REASON_NOW_UNMANAGED = 3,

  /**
   * The device could not be readied for configuration
   */
  REASON_CONFIG_FAILED = 4,

  /**
   * IP configuration could not be reserved (no available address, timeout, etc)
   */
  REASON_IP_CONFIG_UNAVAILABLE = 5,

  /**
   * The IP config is no longer valid
   */
  REASON_IP_CONFIG_EXPIRED = 6,

  /**
   * Secrets were required, but not provided
   */
  REASON_NO_SECRETS = 7,

  /**
   * 802.1x supplicant disconnected
   */
  REASON_SUPPLICANT_DISCONNECT = 8,

  /**
   * 802.1x supplicant configuration failed
   */
  REASON_SUPPLICANT_CONFIG_FAILED = 9,

  /**
   * 802.1x supplicant failed
   */
  REASON_SUPPLICANT_FAILED = 10,

  /**
   * 802.1x supplicant took too long to authenticate
   */
  REASON_SUPPLICANT_TIMEOUT = 11,

  /**
   * PPP service failed to start
   */
  REASON_PPP_START_FAILED = 12,

  /**
   * PPP service disconnected
   */
  REASON_PPP_DISCONNECT = 13,

  /**
   * PPP failed
   */
  REASON_PPP_FAILED = 14,

  /**
   * DHCP client failed to start
   */
  REASON_DHCP_START_FAILED = 15,

  /**
   * DHCP client error
   */
  REASON_DHCP_ERROR = 16,

  /**
   * DHCP client failed
   */
  REASON_DHCP_FAILED = 17,

  /**
   * Shared connection service failed to start
   */
  REASON_SHARED_START_FAILED = 18,

  /**
   * Shared connection service failed
   */
  REASON_SHARED_FAILED = 19,

  /**
   * AutoIP service failed to start
   */
  REASON_AUTOIP_START_FAILED = 20,

  /**
   * AutoIP service error
   */
  REASON_AUTOIP_ERROR = 21,

  /**
   * AutoIP service failed
   */
  REASON_AUTOIP_FAILED = 22,

  /**
   * The line is busy
   */
  REASON_MODEM_BUSY = 23,

  /**
   * No dial tone
   */
  REASON_MODEM_NO_DIAL_TONE = 24,

  /**
   * No carrier could be established
   */
  REASON_MODEM_NO_CARRIER = 25,

  /**
   * The dialing request timed out
   */
  REASON_MODEM_DIAL_TIMEOUT = 26,

  /**
   * The dialing attempt failed
   */
  REASON_MODEM_DIAL_FAILED = 27,

  /**
   * Modem initialization failed
   */
  REASON_MODEM_INIT_FAILED = 28,

  /**
   * Failed to select the specified APN
   */
  REASON_GSM_APN_FAILED = 29,

  /**
   * Not searching for networks
   */
  REASON_GSM_REGISTRATION_NOT_SEARCHING = 30,

  /**
   * Network registration denied
   */
  REASON_GSM_REGISTRATION_DENIED = 31,

  /**
   * Network registration timed out
   */
  REASON_GSM_REGISTRATION_TIMEOUT = 32,

  /**
   * Failed to register with the requested network
   */
  REASON_GSM_REGISTRATION_FAILED = 33,

  /**
   * PIN check failed
   */
  REASON_GSM_PIN_CHECK_FAILED = 34,

  /**
   * Necessary firmware for the device may be missing
   */
  REASON_FIRMWARE_MISSING = 35,

  /**
   * The device was removed
   */
  REASON_REMOVED = 36,

  /**
   * NetworkManager went to sleep
   */
  REASON_SLEEPING = 37,

  /**
   * The device's active connection disappeared
   */
  REASON_CONNECTION_REMOVED = 38,

  /**
   * Device disconnected by user or client
   */
  REASON_USER_REQUESTED = 39,

  /**
   * Carrier/link changed
   */
  REASON_CARRIER = 40,

  /**
   * The device's existing connection was assumed
   */
  REASON_CONNECTION_ASSUMED = 41,

  /**
   * The supplicant is now available
   */
  REASON_SUPPLICANT_AVAILABLE = 42,

  /**
   * The modem could not be found
   */
  REASON_MODEM_NOT_FOUND = 43,

  /**
   * The Bluetooth connection failed or timed out
   */
  REASON_BT_FAILED = 44,

  /**
   * GSM Modem's SIM Card not inserted
   */
  REASON_GSM_SIM_NOT_INSERTED = 45,

  /**
   * GSM Modem's SIM Pin required
   */
  REASON_GSM_SIM_PIN_REQUIRED = 46,

  /**
   * GSM Modem's SIM Puk required
   */
  REASON_GSM_SIM_PUK_REQUIRED = 47,

  /**
   * GSM Modem's SIM wrong
   */
  REASON_GSM_SIM_WRONG = 48,

  /**
   * InfiniBand device does not support connected mode
   */
  REASON_INFINIBAND_MODE = 49,

  /**
   * A dependency of the connection failed
   */
  REASON_DEPENDENCY_FAILED = 50,

  /**
   * Problem with the RFC 2684 Ethernet over ADSL bridge
   */
  REASON_BR2684_FAILED = 51,

  /**
   * ModemManager not running
   */
  REASON_MODEM_MANAGER_UNAVAILABLE = 52,

  /**
   * The Wi-Fi network could not be found
   */
  REASON_SSID_NOT_FOUND = 53,

  /**
   * A secondary connection of the base connection failed
   */
  REASON_SECONDARY_CONNECTION_FAILED = 54,

  /**
   * DCB or FCoE setup failed
   */
  REASON_DCB_FCOE_FAILED = 55,

  /**
   * Teamd control failed
   */
  REASON_TEAMD_CONTROL_FAILED = 56,

  /**
   * Modem failed or no longer available
   */
  REASON_MODEM_FAILED = 57,

  /**
   * Modem now ready and available
   */
  REASON_MODEM_AVAILABLE = 58,

  /**
   * SIM PIN was incorrect
   */
  REASON_SIM_PIN_INCORRECT = 59,

  /**
   * New connection activation was enqueued
   */
  REASON_NEW_ACTIVATION = 60,

  /**
   * The device's parent changed
   */
  REASON_PARENT_CHANGED = 61,

  /**
   * The device parent's management changed
   */
  REASON_PARENT_MANAGED_CHANGED = 62,

  /**
   * Problem communicating with Open vSwitch database
   */
  REASON_OVSDB_FAILED = 63,

  /**
   * A duplicate IP address was detected
   */
  REASON_IP_ADDRESS_DUPLICATE = 64,

  /**
   * The selected IP method is not supported
   */
  REASON_IP_METHOD_UNSUPPORTED = 65,

  /**
   * Configuration of SR-IOV parameters failed
   */
  REASON_SRIOV_CONFIGURATION_FAILED = 66,

  /**
   * The Wi-Fi P2P peer could not be found
   */
  REASON_PEER_NOT_FOUND = 67,
}

/**
 * General device capability flags (NMDeviceCapabilities).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMDeviceCapabilities
 */
export enum DeviceCapabilities {
  /**
   * Device has no special capabilities.
   */
  NM_DEVICE_CAP_NONE = 0x00000000,

  /**
   * NetworkManager supports this device.
   */
  NM_DEVICE_CAP_NM_SUPPORTED = 0x00000001,

  /**
   * This device can indicate carrier status
   */
  NM_DEVICE_CAP_CARRIER_DETECT = 0x00000002,

  /**
   * This device is a software device.
   */
  NM_DEVICE_CAP_IS_SOFTWARE = 0x00000004,

  /**
   * This device supports single-root I/O virtualization
   */
  NM_DEVICE_CAP_SRIOV = 0x00000008,
}

/**
 * Device properties (org.freedesktop.NetworkManager.Device).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.Device.html
 */
export interface DeviceProperties {
  /**
   * Operating-system specific transient device hardware identifier.
   * This is an opaque string representing the underlying hardware for the device, and shouldn't be used to keep track of individual devices.
   * For some device types (Bluetooth, Modems) it is an identifier used by the hardware service (ie bluez or ModemManager) to refer to that device, and client programs use it get additional information from those services which NM does not provide.
   * The Udi is not guaranteed to be consistent across reboots or hotplugs of the hardware.
   * If you're looking for a way to uniquely track each device in your application, use the object path.
   * If you're looking for a way to track a specific piece of hardware across reboot or hotplug, use a MAC address or USB serial number.
   *
   * Note that non-UTF-8 characters are backslash escaped. Use g_strcompress() to obtain the true (non-UTF-8) string.
   */
  Udi: string;

  /**
   * The path of the device as exposed by the udev property ID_PATH.
   *
   * Note that non-UTF-8 characters are backslash escaped. Use g_strcompress() to obtain the true (non-UTF-8) string.
   */
  Path: string;

  /**
   * The name of the device's control (and often data) interface.
   * Note that non UTF-8 characters are backslash escaped, so the resulting name may be longer then 15 characters. Use g_strcompress() to revert the escaping.
   */
  Interface: string;

  /**
   * The name of the device's data interface when available.
   * This property may not refer to the actual data interface until the device has successfully established a data connection, indicated by the device's State becoming ACTIVATED.
   * Note that non UTF-8 characters are backslash escaped, so the resulting name may be longer then 15 characters.
   * Use g_strcompress() to revert the escaping.
   */
  IpInterface: string;

  /**
   * The driver handling the device.
   * Non-UTF-8 sequences are backslash escaped.
   * Use g_strcompress() to revert.
   */
  Driver: string;

  /**
   * The version of the driver handling the device.
   * Non-UTF-8 sequences are backslash escaped. Use g_strcompress() to revert.
   */
  DriverVersion: string;

  /**
   * The firmware version for the device.
   * Non-UTF-8 sequences are backslash escaped. Use g_strcompress() to revert.
   */
  FirmwareVersion: string;

  /**
   * Flags describing the capabilities of the device.
   */
  Capabilities: number;

  /**
   * DEPRECATED; use the 'Addresses' property of the 'Ip4Config' object instead. This property always returns 0.0.0.0 (numeric 0) as address.
   * @deprecated
   */
  Ip4Address: number;

  /**
   * The current state of the device.
   */
  State: DeviceState;

  /**
   * The current state and reason for changing to that state.
   * Keys are state numbers in string format; values are DeviceStateReasons.
   */
  StateReason: {
    [key: string]: DeviceStateReason;
  };

  /**
   * Object path of an ActiveConnection object that "owns" this device during activation.
   * The ActiveConnection object tracks the life-cycle of a connection to a specific network and implements the org.freedesktop.NetworkManager.Connection.Active D-Bus interface.
   */
  ActiveConnection: ActiveConnectionPath;

  /**
   * Object path of the Ip4Config object describing the configuration of the device.
   * Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED state.
   */
  Ip4Config: Ip4ConfigPath;

  /**
   * Object path of the Dhcp4Config object describing the DHCP options returned by the DHCP server.
   * Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED state.
   */
  Dhcp4Config: Dhcp4ConfigPath;

  /**
   * Object path of the Ip6Config object describing the configuration of the device.
   * Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED state.
   */
  Ip6Config: Ip6ConfigPath;

  /**
   * Object path of the Dhcp6Config object describing the DHCP options returned by the DHCP server.
   * Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED state.
   */
  Dhcp6Config: Dhcp6ConfigPath;

  /**
   * Whether or not this device is managed by NetworkManager.
   * Setting this property has a similar effect to configuring the device as unmanaged via the keyfile.unmanaged-devices setting in NetworkManager.conf.
   * Changes to this value are not persistent and lost after NetworkManager restart.
   */
  Managed: boolean;

  /**
   * If TRUE, indicates the device is allowed to autoconnect.
   * If FALSE, manual intervention is required before the device will automatically connect to a known network, such as activating a connection using the device, or setting this property to TRUE.
   * This property cannot be set to TRUE for default-unmanaged devices, since they never autoconnect.
   */
  Autoconnect: boolean;

  /**
   * If TRUE, indicates the device is likely missing firmware necessary for its operation.
   */
  FirmwareMissing: boolean;

  /**
   * If TRUE, indicates the NetworkManager plugin for the device is likely missing or misconfigured.
   */
  NmPluginMissing: boolean;

  /**
   * The general type of the network device; ie Ethernet, Wi-Fi, etc.
   */
  DeviceType: DeviceType;

  /**
   * An array of object paths of every configured connection that is currently 'available' through this device.
   */
  AvailableConnections: Array<ConnectionPath>;

  /**
   * If non-empty, an (opaque) indicator of the physical network port associated with the device.
   * This can be used to recognize when two seemingly-separate hardware devices are actually just different virtual interfaces to the same physical port.
   */
  PhysicalPortId: string;

  /**
   * The device MTU (maximum transmission unit).
   */
  Mtu: number;

  /**
   * Whether the amount of traffic flowing through the device is subject to limitations, for example set by service providers.
   */
  Metered: Metered;

  /**
   * Array of LLDP neighborstring; each element is a dictionary mapping LLDP TLV names to variant boxed values.
   */
  LldpNeighbors: Array<any>;

  /**
   * True if the device exists, or False for placeholder devices that do not yet exist but could be automatically created by NetworkManager if one of their AvailableConnections was activated.
   */
  Real: boolean;

  /**
   * The result of the last IPv4 connectivity check.
   */
  Ip4Connectivity: ConnectivityState;

  /**
   * The result of the last IPv6 connectivity check.
   */
  Ip6Connectivity: ConnectivityState;

  /**
   * The flags of the network interface. See NMDeviceInterfaceFlags for the currently defined flags.
   */
  InterfaceFlags: number;

  /**
   * The hardware address of the device. This replaces the other 'HwAddress' properties on the device-specific D-Bus interfaces.
   */
  HwAddress: string;
}
