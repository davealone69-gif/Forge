package com.forge.app

import android.app.Activity
import android.os.Bundle
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.webkit.WebViewAssetLoader

class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        val web = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.allowFileAccess = false
            settings.allowContentAccess = false
            settings.mediaPlaybackRequiresUserGesture = false
            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? = assetLoader.shouldInterceptRequest(request.url)

                @Suppress("DEPRECATION")
                override fun shouldInterceptRequest(
                    view: WebView,
                    url: String
                ): WebResourceResponse? = assetLoader.shouldInterceptRequest(android.net.Uri.parse(url))
            }
            loadUrl("https://appassets.androidplatform.net/assets/www/index.html")
        }

        setContentView(web)
    }
}
