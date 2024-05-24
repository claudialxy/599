package com.firstrndemo;

import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.ProgressBar;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

/**
 * 隐私政策webveiw
 */
public class WebViewActivity extends AppCompatActivity {

    private WebView webView;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e("JS-->原生====","WebViewActivity====onCreate===");
        setContentView(R.layout.activity_webview);
        Toolbar toolbar = findViewById(R.id.toolbar);
        Drawable icon = getDrawable(R.drawable.nav_ic_arrow_back);
        icon.setTint(Color.BLACK);
        toolbar.setNavigationIcon(icon);
        toolbar.setNavigationOnClickListener(v -> finish());

        WebView myWebView = findViewById(R.id.myWebView);
        webView = myWebView;
        // 进度条
        ProgressBar progressBar = findViewById(R.id.progressBar);
        webView.setWebChromeClient(new WebChromeClient(){
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                super.onProgressChanged(view, newProgress);
                if(newProgress == 100){
                    progressBar.setVisibility(View.GONE);
                }else {
                    progressBar.setVisibility(View.VISIBLE);
                    progressBar.setProgress(newProgress);
                }
            }

            @Override
            public void onReceivedTitle(WebView view, String title) {
                super.onReceivedTitle(view, title);
            }
        });
        Log.e("JS-->原生====","WebViewActivity====onCreate===222");
        CookieManager.getInstance().setAcceptCookie(true);
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setJavaScriptCanOpenWindowsAutomatically(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setDatabaseEnabled(true);
        webSettings.setAllowContentAccess(true);
        webSettings.setSavePassword(false);
        if(BuildConfig.DEBUG){
            WebView.setWebContentsDebuggingEnabled(true);
        }
        Bundle args = getIntent().getExtras();
        webView.loadUrl(args.getString("url"));
    }

    @Override
    protected void onDestroy() {
        webView.destroy();
        super.onDestroy();
    }
}
