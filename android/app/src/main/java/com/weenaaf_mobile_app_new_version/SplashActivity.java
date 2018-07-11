package com.weenaaf_mobile_app_new_version;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

/**
 * Created by masoud on 7/11/18.
 */

public class SplashActivity extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle b){
        super.onCreate(b);

        Intent i = new Intent(this, MainActivity.class);
        startActivity(i);
        finish();
    }
}
