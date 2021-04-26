class CelsiusToFahrenheitConvertorScreen{
    constructor(){
        this.celsiusTextField =
            '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextC"]';
        this.fahrenheitTextField =
            '//android.widget.EditText[@resource-id="com.androiddev2015.cfconverter:id/editTextF"]';
        this.submitButton =
            '//android.widget.Button[@resource-id="com.androiddev2015.cfconverter:id/btncnvCF"]';
        this.rateAppMessage = '//android.widget.TextView[@resource-id="android:id/message"]';
        this.laterButton = '//android.widget.Button[@resource-id="android:id/button3"]';
    }
}

module.exports = new CelsiusToFahrenheitConvertorScreen();
