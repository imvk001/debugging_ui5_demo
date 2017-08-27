sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/routing/History",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("sap.ui.debug.controller.BaseController", {
    aFilter: [],

    getRouter: function(){
      return  sap.ui.core.UIComponent.getRouterFor(this);
    },

    setModel : function(oModel, sName){
      return this.getView().setModel(oModel, sName);
    },

    getModel : function(sName){
      return this.getOwnerComponent().getModel();
    },

    getResourceBundle: function(){
      return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    },
  
    onNavBack : function() {
      var sPreviousHash = History.getInstance().getPreviousHash();

        if (sPreviousHash !== undefined) {
        history.go(-1);
      } else {
        this.getRouter().navTo("master", {}, true);
      }
    }

  });

});
