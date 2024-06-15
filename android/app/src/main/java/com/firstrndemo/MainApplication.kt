package com.firstrndemo

import android.app.Application
import android.util.Log
//import cn.jiguang.plugins.push.JPushModule
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.flipper.ReactNativeFlipper
import com.facebook.soloader.SoLoader
import cn.reactnative.modules.update.UpdateContext;
import cn.reactnative.modules.update.UpdatePackage;
import com.facebook.common.logging.FLog

class MainApplication : Application(), ReactApplication {

  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {
        override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
              // Packages that cannot be autolinked yet can be added manually here, for example:
              // add(MyReactNativePackage())
                add(MyAppPackage())
            }

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED

         // ↓↓↓将下面这一段添加到 DefaultReactNativeHost 内部！
        override fun getJSBundleFile(): String? {
          return UpdateContext.getBundleUrl(this@MainApplication)
        }
      }

  override val reactHost: ReactHost
    get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    SoLoader.init(this, false)
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      load()
    }
    ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
      //调用此方法：点击通知让应用从后台切到前台
//      JPushModule.registerActivityLifecycle(this);
  }

    fun initReactNative() {
        val reactNativeHost = reactNativeHost
        if (!reactNativeHost.hasInstance()) {
            // 加载 ReactNative
            SoLoader.init(this,  /* native exopackage */false)
            FLog.setMinimumLoggingLevel(FLog.INFO)
        }
    }
}
