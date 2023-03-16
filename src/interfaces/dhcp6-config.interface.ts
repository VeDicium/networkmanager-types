/**
 * Path to DHCP6 Config file.
 */
export type Dhcp6ConfigPath = string;

/**
 * IPv6 DHCP Client State properties (org.freedesktop.NetworkManager.DHCP6Config).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.DHCP6Config.html
 */
export interface Dhcp6ConfigProperties {
  /**
   * Configuration options returned by a DHCP server, if any.
   */
  Options: Array<{
    [key: string]: any;
  }>;
}
