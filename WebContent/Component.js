sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/debug/model/models",
	"sap/ui/model/resource/ResourceModel"
    
    ], function(UIComponent, Device, models, ResourceModel) {
    	"use strict";
        
    	// TODO remove the following demo code
    	// ---------------------------- TEMP MOCKSERVER CODE------------------------------------------
    	//server.init();
    	// ---------------------------- END TEMP MOCKSERVER CODE--------------------------------------
    	
	var navigationWithContext = {
	
	};

	return UIComponent.extend("sap.ui.debug.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
		
			UIComponent.prototype.init.apply(this, arguments);
			this.bpSearchFilter = [];

//			set i18n Model
			var i18nModel = new ResourceModel({
				bundleName : "sap.ui.debug.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");

			// create the views based on the url/hash
			this.getRouter().initialize();
		},



		getNavigationPropertyForNavigationWithContext: function(sEntityNameSet, targetPageName) {
			var entityNavigations = navigationWithContext[sEntityNameSet];
			return entityNavigations == null ? null : entityNavigations[targetPageName];
		}
	});

});
