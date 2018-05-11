package com.expressproject;

import com.facebook.react.ReactActivity;
import android.app.Activity;
import com.umeng.analytics.MobclickAgent;
import com.umeng.commonsdk.UMConfigure;

public class MainActivity extends ReactActivity {

    private static Activity mCurrentMainActivity = null;

    @Override
    public void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);

    }

    @Override
    public void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ExpressProject";
    }

    public static Activity getActivity() {
         Activity activity = mCurrentMainActivity;
         return activity;
    }
}
