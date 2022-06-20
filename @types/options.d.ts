declare interface OptionValue {
  /**
   * Filename on GitHub
   */
  filename: string
  /**
   * The packages that are required to install
   */
  packages: string[]
  /**
   * The package manager to use.
   */
  packageManager: string
  /**
   * Cover the default filename
   */
  rename?: string
  /**
   * Handle the default file content
   */
  handler: (text: string) => string
}

declare interface Option {
  /**
   * Shown title of the option
   */
  title: string
  /**
   * Item
   */
  value: OptionValue
  /**
   * Description of the option
   */
  description?: string
}

