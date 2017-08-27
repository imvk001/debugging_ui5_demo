sap.ui.define([
               "sap/ui/comline/bpsearch/controller/BaseController",
               "sap/ui/model/json/JSONModel"
               ], function(BaseController, JSONModel){
	
	"use strict";
	return BaseController.extend("sap.ui.comline.bpsearch.controller.App", {
		
		onInit: function(){
//			var oViewModel,
//				fnSetAppNotBusy,
//				oListSelector = this.getOwnerComponent().oListSelector,
//				iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();
//			
//			oViewModel = new JSONModel({
//				busy : true,
//				delay : 0
//			});
//			
//			this.setModel(oViewModel, "appView");
//			
//			fnSetAppNotBusy = function(){
//				oViewModel.setProperty("/busy", false);
//				oViewModel.setProperty("/delay", iOriginalBusyDelay);
//			};
//			
//			this.getOwnerComponent().getModel().metadataLoaded().then(fnSetAppNotBusy);
			
			
			
		//	this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
		
	});
	
});