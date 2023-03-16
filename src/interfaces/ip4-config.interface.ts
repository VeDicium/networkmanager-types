/**
 * Path to IP4 Config file.
 */
export type Ip4ConfigPath = string;

/**
 * IPv4 Configuration Set properties (org.freedesktop.NetworkManager.IP4Config).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.IP4Config.html
 */
export interface Ip4ConfigProperties {
  /**
   * Array of arrays of IPv4 address/prefix/gateway. All 3 elements of each array are in network byte order.
   * Essentially: [(addr, prefix, gateway), (addr, prefix, gateway), ...]
   * Deprecated: use AddressData and Gateway
   * @deprecated
   */
  Addresses: Array<[number, number, number]>;

  /**
   * Array of IP address data objects.
   * All addresses will include "address" (an IP address string), and "prefix" (a uint).
   * Some addresses may include additional attributes.
   */
  AddressData: Array<{
    /**
     * IPv4 address.
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
   * Arrays of IPv4 route/prefix/next-hop/metric.
   * All 4 elements of each tuple are in network byte order. 'route' and 'next hop' are IPv4 addresses, while prefix and metric are simple unsigned integers.
   * Essentially: [(route, prefix, next-hop, metric), (route, prefix, next-hop, metric), ...].
   * Deprecated: use RouteData
   * @deprecated
   */
  Routes: Array<[number, number, number, number]>;

  /**
   * Array of IP route data objects.
   * All routes will include "dest" (an IP address string) and "prefix" (a uint).
   * Some routes may include "next-hop" (an IP address string), "metric" (a uint), and additional attributes.
   */
  RouteData: Array<{
    /**
     * IPv4 Address
     */
    dest: string;

    /**
     * Prefix
     */
    prefix: number;

    /**
     * IPv4 Address
     */
    'next-hop'?: string;

    /**
     * Metric
     */
    metric?: number;

    [key: string]: any;
  }>;

  /**
   * The nameservers in use.
   * Deprecated: use NameserverData
   * @deprecated
   */
  Nameservers: Array<number>;

  /**
   * The nameservers in use. Currently, only the value "address" is recognized (with an IP address string).
   *
   * Since: 1.14
   */
  NameserverData: Array<{
    /**
     * IPv4 Address.
     */
    address: string;
  }>;

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

  /**
   * The Windows Internet Name Service servers associated with the connection.
   * Each address is in network byte order.
   * Deprecated: use WinsServerData.
   * @deprecated
   */
  WinsServers: Array<number>;

  /**
   * The Windows Internet Name Service servers associated with the connection.
   *
   * Since: 1.14
   */
  WinsServerData: Array<string>;
}
