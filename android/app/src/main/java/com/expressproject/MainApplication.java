package com.expressproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.toast.RCTToastPackage;
import com.gm.RCTGMBluetooth.RCTGMBluetoothPackage;
import cn.jpush.reactnativejpush.JPushPackage;
import cn.qiuxiang.react.geolocation.AMapGeolocationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.gm.RCTGMBluetooth.RCTGMBluetoothPackage;
import com.expressproject.AlipayReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RCTToastPackage(),
            new RCTGMBluetoothPackage(),
            new AMapGeolocationPackage(),
            new JPushPackage(!BuildConfig.DEBUG, !BuildConfig.DEBUG),
            new AlipayReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
