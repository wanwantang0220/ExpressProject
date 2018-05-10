package com.expressproject;

import com.facebook.react.ReactActivity;
import android.app.Activity;

public class MainActivity extends ReactActivity {

    private static Activity mCurrentMainActivity = null;

    @Override
    public void onResume() {
        super.onResume();

    }

    @Override
    public void onPause() {
        super.onPause();
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
