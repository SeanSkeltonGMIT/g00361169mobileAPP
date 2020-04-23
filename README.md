# g00361169mobileAPP
end of year project
This is a very basic weather app utilizing openweatherAPI,the the API is harded coded for galway and dublin,but you can search for 
other towns.

you navigate between 4 pages,the home page which using geo coordinates give you your current longitude and latiude,search weather page
which is automatically populated with the weather for galway, a storage page and a page for dublins weather.

each weather page displays the relevant weather icon,temperature,description,humidty and wind speed.

The ionic storage page is blank due too errors which I will post below

their was some commented code which was an attempt,but due too this errors breaking my application I decided too put my foucs on other
features.




References
https://learnonline.gmit.ie/course/view.php?id=1667 main source of information
https://stackoverflow.com/questions/49874558/how-to-use-open-weather-api-icons for icon display
https://openweathermap.org/current  main source of API information



----
  core.js:6014 ERROR Error: Uncaught (in promise): NullInjectorError: StaticInjectorError(AppModule)[HomePage -> Storage]: 
  StaticInjectorError(Platform: core)[HomePage -> Storage]: 
    NullInjectorError: No provider for Storage!
NullInjectorError: StaticInjectorError(AppModule)[HomePage -> Storage]: 
  StaticInjectorError(Platform: core)[HomePage -> Storage]: 
    NullInjectorError: No provider for Storage!
    at NullInjector.get (core.js:855)
    at resolveToken (core.js:17514)
    at tryResolveToken (core.js:17440)
    at StaticInjector.get (core.js:17266)
    at resolveToken (core.js:17514)
    at tryResolveToken (core.js:17440)
    at StaticInjector.get (core.js:17266)
    at resolveNgModuleDep (core.js:30393)
    at NgModuleRef_.get (core.js:31578)
    at resolveNgModuleDep (core.js:30393)
    at resolvePromise (zone-evergreen.js:797)
    at resolvePromise (zone-evergreen.js:754)
    at zone-evergreen.js:858
    at ZoneDelegate.invokeTask (zone-evergreen.js:391)
    at Object.onInvokeTask (core.js:39680)
    at ZoneDelegate.invokeTask (zone-evergreen.js:390)
    at Zone.runTask (zone-evergreen.js:168)
    at drainMicroTaskQueue (zone-evergreen.js:559)
----












