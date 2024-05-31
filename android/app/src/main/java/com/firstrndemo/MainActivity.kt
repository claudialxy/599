package com.firstrndemo

import android.content.SharedPreferences
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import android.os.Bundle;
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.ActionBar

class MainActivity : ReactActivity() ,PrivacyFragment.PrivacyListener{

    private val SPLASH_TAG = "splash_tag";
    private  var splashFragment : SplashFragment?=null
    private  var privacyFragment : PrivacyFragment?=null

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "FirstRNDemo"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

 override fun onCreate(savedInstanceState: Bundle?) {
     setTheme(R.style.AppTheme)
     super.onCreate(null)
//     var decorView: View   = window.decorView
//     var option :Int =  View.SYSTEM_UI_FLAG_HIDE_NAVIGATION ; View.SYSTEM_UI_FLAG_FULLSCREEN
//     decorView.systemUiVisibility = option
     showSplash(savedInstanceState)
     var actionBar: ActionBar?  = supportActionBar
     actionBar?.hide()
     Log.e("JS-->原生====","MainActivity====onCreate===="+checkPrivacyAgreement())
     if(!checkPrivacyAgreement()){
         showPrivacyAlert(savedInstanceState)
     }
  }

    private fun showPrivacyAlert(savedInstanceState: Bundle?) {
        Log.e("JS-->原生====","MainActivity====showPrivacyAlert====111")
        var tag: String?  = savedInstanceState?.getString("privacy_tag")
        Log.e("JS-->原生====","MainActivity====showPrivacyAlert====tag===="+tag)
        if(tag!=null){
            privacyFragment = supportFragmentManager.findFragmentByTag(tag) as PrivacyFragment
        }
        Log.e("JS-->原生====","MainActivity====showPrivacyAlert====222===="+privacyFragment+"===="+supportFragmentManager)
        if(privacyFragment==null){
            privacyFragment = PrivacyFragment()
            privacyFragment?.show(supportFragmentManager,"privacy_tag")
        }
        privacyFragment?.setListener(this)
    }


    private fun showSplash(savedInstanceState: Bundle?) {
        if(savedInstanceState!=null){
            splashFragment = supportFragmentManager.findFragmentByTag(SPLASH_TAG) as SplashFragment
        }

        if(splashFragment == null && reactInstanceManager.currentReactContext == null){
            Log.e("JS-->原生====","MainActivity====showSplash==="+supportFragmentManager)
            splashFragment = SplashFragment()
            splashFragment?.show(supportFragmentManager, SPLASH_TAG)
        }
    }

    fun hideSplash() {
        if (splashFragment != null) {
            splashFragment?.dismiss()
        }
    }

    fun isAddSplash() : Boolean{
        if(splashFragment ==null){
            return false
        }
        return  splashFragment!!.isAdded;
    }

    fun checkPrivacyAgreement() :Boolean{
        val sp : SharedPreferences = getSharedPreferences("privacy", MODE_PRIVATE)
        return sp.getBoolean("privacy_grant",false)
    }

    fun setPrivacyAgreement(){
        val sp : SharedPreferences = getSharedPreferences("privacy", MODE_PRIVATE)
        sp.edit().putBoolean("privacy_grant",true).apply()
    }

    private fun hidePrivacyAlert() {
        Log.e("JS-->原生====","MainActivity====hidePrivacyAlert======"+privacyFragment)
        if (privacyFragment != null) {
            privacyFragment!!.dismiss()
            privacyFragment = null
        }
    }

    private fun initReactNative() {
        Log.e("JS-->原生====","MainActivity====initReactNative======"+privacyFragment)
        // 如果还没有启动 RN
        val application = application as MainApplication
        application.initReactNative()
        Log.e("JS-->原生====","MainActivity====initReactNative======222")
        loadApp("Home")////
    }

    override fun agreeClick() {
        Log.e("JS-->原生====","MainActivity====agreeClick======")
        hidePrivacyAlert()
        Toast.makeText(applicationContext, "正在加载资源，请稍后...", Toast.LENGTH_SHORT).show()
        setPrivacyAgreement()
//        initReactNative()
    }

    override fun exitClick() {
        hidePrivacyAlert()
        finish()
    }
}
