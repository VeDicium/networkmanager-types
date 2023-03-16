import { ConnectionPath } from './connection.interface';

/**
 * Connection Settings Profile Manager properties (org.freedesktop.NetworkManager.Settings).
 *
 * @see https://developer-old.gnome.org/NetworkManager/stable/gdbus-org.freedesktop.NetworkManager.Settings.html
 */
export interface SettingsProperties {
  /**
   * List of object paths of available network connection profiles.
   */
  Connections: Array<ConnectionPath>;

  /**
   * The machine hostname stored in persistent configuration.
   */
  Hostname: string;

  /**
   * If true, adding and modifying connections is supported.
   */
  CanModify: boolean;
}
