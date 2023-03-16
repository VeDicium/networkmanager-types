import { AccessPointPath } from './access-point.interface';

/**
 * Indicates the 802.11 mode an access point or device is currently in (NM80211Mode).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NM80211Mode
 */
export enum NM80211Mode {
  /**
   * The device or access point mode is unknown
   */
  UNKNOWN = 0,

  /**
   * For both devices and access point objects, indicates the object is part of an Ad-Hoc 802.11 network without a central coordinating access point.
   */
  ADHOC = 1,

  /**
   * The device or access point is in infrastructure mode. For devices, this indicates the device is an 802.11 client/station.
   * For access point objects, this indicates the object is an access point that provides connectivity to clients.
   */
  INFRA = 2,

  /**
   * The device is an access point/hotspot.
   * Not valid for access point objects; used only for hotspot mode on the local machine.
   */
  AP = 3,

  /**
   * The device is a 802.11s mesh point.
   * Since: 1.20.
   */
  MESH = 4,
}

/**
 * 802.11 specific device encryption and authentication capabilities.
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NMDeviceWifiCapabilities
 */
export enum DeviceWifiCapabilities {
  /**
   * Device has no encryption/authentication capabilities
   */
  NONE = 0x00000000,

  /**
   * Device supports 40/64-bit WEP encryption
   */
  CIPHER_WEP40 = 0x00000001,

  /**
   * Device supports 104/128-bit WEP encryption
   */
  CIPHER_WEP104 = 0x00000002,

  /**
   * Device supports TKIP encryption
   */
  CIPHER_TKIP = 0x00000004,

  /**
   * Device supports AES/CCMP encryption
   */
  CIPHER_CCMP = 0x00000008,

  /**
   * Device supports WPA1 authentication
   */
  WPA = 0x00000010,

  /**
   * Device supports WPA2/RSN authentication
   */
  RSN = 0x00000020,

  /**
   * Device supports Access Point mode
   */
  AP = 0x00000040,

  /**
   * Device supports Ad-Hoc mode
   */
  ADHOC = 0x00000080,

  /**
   * Device reports frequency capabilities
   */
  FREQ_VALID = 0x00000100,

  /**
   * Device supports 2.4GHz frequencies
   */
  FREQ_2GHZ = 0x00000200,

  /**
   * Device supports 5GHz frequencies
   */
  FREQ_5GHZ = 0x00000400,

  /**
   * Device supports acting as a mesh point. Since: 1.20.
   */
  MESH = 0x00001000,

  /**
   * Device supports WPA2/RSN in an IBSS network. Since: 1.22.
   */
  IBSS_RSN = 0x00002000,
}

/**
 * Wi-Fi Device properties (org.freedesktop.NetworkManager.Device.Wireless).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.Device.Wireless.html
 */
export interface WirelessDeviceProperties {
  /**
   * The active hardware address of the device.
   *
   * DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
   * @deprecated
   */
  HwAddress: string;

  /**
   * The permanent hardware address of the device.
   */
  PermHwAddress: string;

  /**
   * The operating mode of the wireless device.
   */
  Mode: NM80211Mode;

  /**
   * The bit rate currently used by the wireless device, in kilobits/second (Kb/s).
   */
  Bitrate: number;

  /**
   * List of object paths of access point visible to this wireless device.
   */
  AccessPoints: Array<AccessPointPath>;

  /**
   * Object path of the access point currently used by the wireless device.
   */
  ActiveAccessPoint: AccessPointPath;

  /**
   * The capabilities of the wireless device.
   */
  WirelessCapabilities: number;

  /**
   * The timestamp (in CLOCK_BOOTTIME milliseconds) for the last finished network scan.
   * A value of -1 means the device never scanned for access points.
   */
  LastScan: number;
}
