/**
 * Path to DHCP4 Config file.
 */
export type Dhcp4ConfigPath = string;

/**
 * IPv4 DHCP Client State properties (org.freedesktop.NetworkManager.DHCP4Config).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.DHCP4Config.html
 */
export interface Dhcp4ConfigProperties {
  /**
   * Configuration options returned by a DHCP server, if any.
   */
  Options: Array<{
    [key: string]: any;
  }>;
}
