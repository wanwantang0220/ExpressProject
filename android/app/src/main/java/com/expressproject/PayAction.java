package com.expressproject;

import android.app.Activity;
import android.text.TextUtils;
import com.alipay.sdk.app.EnvUtils;
import com.alipay.sdk.app.PayTask;
import com.expressproject.MainActivity;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;



public class PayAction extends ReactContextBaseJavaModule {


    public PayAction(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "PayAction";
    }

    @ReactMethod
    public void pay(final String orderInfo, final Promise promise) {
        //支付宝沙箱android测试需要调用
        //EnvUtils.setEnv(EnvUtils.EnvEnum.SANDBOX);

    }


}