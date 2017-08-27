sap.ui.define(["sap/ui/debug/controller/BaseController",
  "sap/m/MessageToast"
  ], function(BaseController,MessageToast) {

  "use strict";

  return BaseController.extend("sap.ui.debug.controller.DebugMe", {

    onInit: function () {
    	
    },
  
  addTwoNumbers:function(){
	  
	  debugger;
	  var first=parseInt(this.getView().byId("input1").getValue()); // getting value of first Input 
	  var second=parseInt(this.getView().byId("input2").getValue()); // getting value of second Input 
	  var sum=first+second;
	  MessageToast.show("Sum is "+sum);
  }

  });
});