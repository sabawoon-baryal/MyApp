package com.weenaaf_mobile_app_new_version;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.os.Bundle;

import org.devio.rn.splashscreen.SplashScreen;
import org.devio.rn.splashscreen.SplashScreenReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "Weenaaf_mobile_app_new_version";
    }

    @Override
    protected void onCreate(Bundle b){
        SplashScreen.show(this);
        super.onCreate(b);
    }

    // new
    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {

        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
}
