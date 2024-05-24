package com.myproject;


import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

public class SplashModule extends ReactContextBaseJavaModule {

    public static final  String NAME = "SplashModule";
    private final ReactApplicationContext reactContext;

    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    public SplashModule(ReactApplicationContext context){
        super(context);
       this.reactContext = context;
    }

    @ReactMethod
    public void hideSplash(){
        //readableNativeMap
        UiThreadUtil.runOnUiThread(()->{
            if(!reactContext.hasActiveReactInstance()){
                return;
            }
            MainActivity mainActivity = (MainActivity) reactContext.getCurrentActivity();
            if(mainActivity!=null){
                Log.e("====JS-->原生=====","SplashModule====hideSplash=====333");
                mainActivity.hideSplash();
            }
            //主页面页面渲染到什么程度让他展示，调整时长
        },800);
    }


    @ReactMethod
    public boolean isSplashAdd(){
        if(!reactContext.hasActiveReactInstance()){
            return false;
        }
        MainActivity mainActivity = (MainActivity) reactContext.getCurrentActivity();
        if(mainActivity!=null){
          return mainActivity.isAddSplash();
        }
        return false;
    }

    @ReactMethod
    public boolean checkPrivacyAgreement(){
        if(!reactContext.hasActiveReactInstance()){
            return false;
        }
        MainActivity mainActivity = (MainActivity) reactContext.getCurrentActivity();
        if(mainActivity!=null){
            return mainActivity.checkPrivacyAgreement();
        }
        return false;
    }



}
