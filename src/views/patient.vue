<template>
  <div class="patient">
    <!-- <UserCard></UserCard> -->
    <el-menu
      :default-active="activeChart"
      class="menu"
      @select="chartName => activeChart = chartName"
    >
      <el-menu-item index="ConstantChart">
        <i class="el-icon-menu"></i>
        <span slot="title">实时数据</span>
      </el-menu-item>
      <el-menu-item index="HistoryChart">
        <i class="el-icon-setting"></i>
        <span slot="title">历史数据</span>
      </el-menu-item>
    </el-menu>

    <component :is="activeChart" class="main"></component>
  </div>

</template>

<script type="module">
  import ConstantChart from '../components/constant-chart'
  import HistoryChart from '../components/history-chart'
  import UserCard from '../components/user-card'

  // @TODO 图表部分的包动态加载
  export default {
    data() {
      return { 
        activeChart: 'HistoryChart'
      };
    },
    components: {
      UserCard,
      ConstantChart,
      HistoryChart,
    },
    methods:{
    }
  }
</script>

<style>
.patient .menu{
  width: 200px;
  float: left;
  min-height: 400px;
}

.patient .main{
  overflow: auto;
}

</style>

public class SecondActivity extends AppCompatActivity {
    private TextView tv;
    private WebView mWebView;
 
//    @SuppressLint("JavascriptInterface")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
 
        tv = findViewById(R.id.tv);
 
        mWebView = findViewById(R.id.webview);
 
        String name = getIntent().getStringExtra("name");
        if (!TextUtils.isEmpty(name)){
            tv.setText(name);
        }
 
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setSavePassword(false);
        webSettings.setSaveFormData(false);
        webSettings.setJavaScriptEnabled(true);
        webSettings.setSupportZoom(false);
 
        mWebView.setWebChromeClient(new MyWebChromeClient());
 
//        mWebView.addJavascriptInterface(new DemoJavaScriptInterface(), "demo");
 
        mWebView.loadUrl("http://wechat-dev.cb3dp.com/testwebview2.html");
 
        tv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mWebView.loadUrl("javascript:javaCall('fasff')");
            }
        });
    }
 
    /**
     * Provides a hook for calling "alert" from javascript. Useful for
     * debugging your javascript.
     */
    final class MyWebChromeClient extends WebChromeClient {
        @Override
        public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
            Log.d("TAG", message);
            result.confirm();
 
            tv.setText(message);
            return true;
        }
    }
 }