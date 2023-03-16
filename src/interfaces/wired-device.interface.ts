/**
 * Wired Ethernet Device properties (org.freedesktop.NetworkManager.Device.Wired).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.Device.Wired.html
 */
export interface WiredDeviceProperties {
  /**
   * Active hardware address of the device.
   * DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
   * @deprecated
   */
  HwAddress: string;

  /**
   * Permanent hardware address of the device.
   */
  PermHwAddress: string;

  /**
   * Design speed of the device, in megabits/second (Mb/s).
   */
  Speed: number;

  /**
   * Array of S/390 subchannels for S/390 or z/Architecture devices.
   */
  S390Subchannels: Array<string>;

  /**
   * Indicates whether the physical carrier is found (e.g. whether a cable is plugged in or not).
   * DEPRECATED: check for the "carrier" flag in the "InterfaceFlags" property on the "org.freedesktop.NetworkManager.Device" interface.
   * @deprecated
   */
  Carrier: boolean;
}
