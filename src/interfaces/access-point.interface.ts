/**
 * Path to Access Point configuration file.
 */
export type AccessPointPath = string;

/**
 * 802.11 access point flags (NM80211ApFlags).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NM80211ApFlags
 */
export enum AccessPointFlags {
  /**
   * Access point has no special capabilities
   */
  NONE = 0x00000000,

  /**
   * Access point requires authentication and encryption (usually means WEP)
   */
  PRIVACY = 0x00000001,

  /**
   * Access point supports some WPS method
   */
  WPS = 0x00000002,

  /**
   * Access point supports push-button WPS
   */
  WPS_PBC = 0x00000004,

  /**
   * Access point supports PIN-based WPS
   */
  WPS_PIN = 0x00000008,
}

/**
 * 802.11 access point security and authentication flags (NM80211ApSecurityFlags).
 * These flags describe the current security requirements of an access point as determined from the access point's beacon.
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/nm-dbus-types.html#NM80211ApSecurityFlags
 */
export enum AccessPointSecurityFlags {
  /**
   * The access point has no special security requirements
   */
  NONE = 0x00000000,

  /**
   * 40/64-bit WEP is supported for pairwise/unicast encryption
   */
  PAIR_WEP40 = 0x00000001,

  /**
   * 104/128-bit WEP is supported for pairwise/unicast encryption
   */
  PAIR_WEP104 = 0x00000002,

  /**
   * TKIP is supported for pairwise/unicast encryption
   */
  PAIR_TKIP = 0x00000004,

  /**
   * AES/CCMP is supported for pairwise/unicast encryption
   */
  PAIR_CCMP = 0x00000008,

  /**
   * 40/64-bit WEP is supported for group/broadcast encryption
   */
  GROUP_WEP40 = 0x00000010,

  /**
   * 104/128-bit WEP is supported for group/broadcast encryption
   */
  GROUP_WEP104 = 0x00000020,

  /**
   * TKIP is supported for group/broadcast encryption
   */
  GROUP_TKIP = 0x00000040,

  /**
   * AES/CCMP is supported for group/broadcast encryption
   */
  GROUP_CCMP = 0x00000080,

  /**
   * WPA/RSN Pre-Shared Key encryption is supported
   */
  KEY_MGMT_PSK = 0x00000100,

  /**
   * 802.1x authentication and key management is supported
   */
  KEY_MGMT_802_1X = 0x00000200,

  /**
   * WPA/RSN Simultaneous Authentication of Equals is supported
   */
  KEY_MGMT_SAE = 0x00000400,

  /**
   * WPA/RSN Opportunistic Wireless Encryption is supported
   */
  KEY_MGMT_OWE = 0x00000800,

  /**
   * WPA/RSN Opportunistic Wireless Encryption transition mode is supported.
   * Since: 1.26
   */
  KEY_MGMT_OWE_TM = 0x00001000,

  /**
   * WPA3 Enterprise Suite-B 192 bit mode is supported.
   * Since: 1.30.
   */
  KEY_MGMT_EAP_SUITE_B_192 = 0x00002000,
}

/**
 * Properties of Wi-Fi Access Point (org.freedesktop.NetworkManager.AccessPoint).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.AccessPoint.html
 */
export interface AccessPointProperties {
  /**
   * Flags describing the capabilities of the access point.
   *
   * @see AccessPointFlags
   */
  Flags: number;

  /**
   * Flags describing the access point's capabilities according to WPA (Wifi Protected Access).
   *
   * @see AccessPointSecurityFlags
   */
  WpaFlags: number;

  /**
   * Flags describing the access point's capabilities according to the RSN (Robust Secure Network) protocol.
   *
   * @see AccessPointSecurityFlags
   */
  RsnFlags: number;

  /**
   * The Service Set Identifier identifying the access point.
   */
  Ssid: Array<number>;

  /**
   * The radio channel frequency in use by the access point, in MHz.
   */
  Frequency: number;

  /**
   * The hardware address (BSSID) of the access point.
   */
  HwAddress: string;

  /**
   * Describes the operating mode of the access point.
   *
   * @see WirelessMode
   */
  Mode: number;

  /**
   * The maximum bitrate this access point is capable of, in kilobits/second (Kb/s).
   */
  MaxBitrate: number;

  /**
   * The current signal quality of the access point, in percent.
   */
  Strength: number;

  /**
   * The timestamp (in CLOCK_BOOTTIME seconds) for the last time the access point was found in scan results.
   * A value of -1 means the access point has never been found in scan results.
   */
  LastSteen: number;
}
