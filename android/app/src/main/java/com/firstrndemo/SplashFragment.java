package com.firstrndemo;

import android.app.Dialog;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.DialogFragment;

public class SplashFragment extends DialogFragment {
    @NonNull
    @Override
    public Dialog onCreateDialog(@Nullable Bundle savedInstanceState) {
        setStyle(STYLE_NO_FRAME,R.style.SplashTheme);
        setCancelable(false);
        Log.e("JS-->原生====","SplashFragment====onCreateDialog");
        return super.onCreateDialog(savedInstanceState);
    }
}
