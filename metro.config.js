const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const currentDir = process.cwd()
const config = getDefaultConfig(currentDir)

module.exports = withNativeWind(config, { input: './styles.css' })
