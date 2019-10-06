sap.ui.define(
	["sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	 "sap/ui/core/UIComponent",
	 "sap/m/MessageToast",
	 "sap/ui/model/json/JSONModel"],
	function(Controller, History, UIComponent, MessageToast, JSONModel){
		"use strict";
		return Controller.extend("sai.moola.Walkthrough.controller.Detail",{
			
			onInit: function(){
				var oModel = new JSONModel({
					CurrencyCode: 'EUR'
				});
				this.getView().setModel(oModel,"view");
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			},
			_onObjectMatched : function(oEvent){
				this.byId("rating").reset();
				this.getView().bindElement({
					path:"/" + oEvent.getParameter("arguments").invoicePath,
					model:"invoice"
				});	
			},
			onNavBack : function(){
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();
				
				if(sPreviousHash !== undefined){
					window.history.go(-1);	
				}
				else {
					var oRouter = UIComponent.getRouterFor(this);
					oRouter.navTo("overview",{},true);
				}
			},
			onRatingChange: function(oEvent){
				
				var fValue = oEvent.getParameter("value");
				var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
				MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
			}
		});
	});