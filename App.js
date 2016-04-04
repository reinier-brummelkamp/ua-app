//https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript

var App = (function () {
    "use strict";

    // Instance stores a reference to the Singleton
    var app_instance;

    function app_init(context) {
        // Private variables
        var _appContainer;

        // Private methods

        return {
            // Public variables

            // Public methods 
            setAppContainer: function (appContainer) {
                _appContainer = appContainer;
            },
            AppContainer: function () {
                return _appContainer;
            },
            EventAggregator: function () {
                return EventAggregator.getInstance();
            },
            ElementFactory: function () {
                return ElementFactory.getInstance();
            },
            AppRouteManager: function () {
                return RouteManager.getInstance(App);
            },
            Notify: function () {
                return Notify.getInstance(App);
            },
            CRONManager: function () {
                return CRONManager.getInstance();
            }
        };
    };

    return {

        // Get the Singleton instance if one exists
        // or create one if it doesn't  
        getInstance: function () {
            if (!app_instance)
                app_instance = app_init();

            return app_instance;
        }

    }
}()).getInstance();