import { PluginManager, getLazarPackageLatestVersion } from "ftc-panels"
import { config } from "../config.js"

export default class Manager extends PluginManager {
  IMAGE_KEY = "camStream"
  override onInit(): void {
    this.state.update(this.IMAGE_KEY, null)
    this.socket.addMessageHandler(this.IMAGE_KEY, (data) => {
      this.state.update(this.IMAGE_KEY, data)
    })
  }

  static async getNewVersion(): Promise<string> {
    return await getLazarPackageLatestVersion(config.id)
  }
}
