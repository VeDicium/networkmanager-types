/**
 * Path to IP6 Config file.
 */
export type Ip6ConfigPath = string;

/**
 * IPv6 Configuration Set properties (org.freedesktop.NetworkManager.IP6Config).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.IP6Config.html
 */
export interface Ip6ConfigProperties {
  /**
   * Array of tuples of IPv6 address/prefix/gateway.
   * Deprecated: use AddressData and Gateway.
   * @deprecated
   */
  Addresses: Array<{
    [key: string]: number;
  }>;

  /**
   * Array of IP address data objects.
   * All addresses will include "address" (an IP address string), and "prefix" (a uint).
   * Some addresses may include additional attributes.
   */
  AddressData: Array<{
    /**
     * IPv6 Address.
     */
    address: string;

    /**
     * Prefix.
     */
    prefix: number;

    [key: string]: any;
  }>;

  /**
   * The gateway in use.
   */
  Gateway: string;

  /**
   * Tuples of IPv6 route/prefix/next-hop/metric.
   * Deprecated: use RouteData
   * @deprecated
   */
  Routes: Array<{
    [key: string]: number;
  }>;

  /**
   * Array of IP route data objects.
   * All routes will include "dest" (an IP address string) and "prefix" (a uint).
   * Some routes may include "next-hop" (an IP address string), "metric" (a uint), and additional attributes.
   */
  RouteData: Array<{
    /**
     * IPv6 Address.
     */
    dest: string;

    /**
     * Prefix.
     */
    prefix: number;

    /**
     * IPv6 Address.
     */
    'next-hop'?: string;

    /**
     * Metric.
     */
    metric?: number;
  }>;

  /**
   * The nameservers in use.
   */
  Nameservers: Array<string>;

  /**
   * A list of domains this address belongs to.
   */
  Domains: Array<string>;

  /**
   * A list of dns searches.
   */
  Searches: Array<string>;

  /**
   * A list of DNS options that modify the behavior of the DNS resolver.
   * See resolv.conf(5) manual page for the list of supported options.
   */
  DnsOptions: Array<string>;

  /**
   * The relative priority of DNS servers.
   */
  DnsPriority: number;
}
