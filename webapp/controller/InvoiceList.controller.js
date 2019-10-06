sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sai/moola/Walkthrough/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	],function(Controller, JSONModel, formatter, Filter, FilterOperator){
		"use strict";
		return Controller.extend("sai.moola.Walkthrough.controller.InvoiceList",{
			formatter: formatter,
			onInit : function(){
				
				var oModel = new JSONModel({
					CurrencyCode: "EUR"
				});
				this.getView().setModel(oModel,"view");
			},
			onPress: function(oEvent){
				var oItem = oEvent.getSource();
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("detail",{
					invoicePath: oItem.getBindingContext("invoice").getPath().substr(1)
				});
			},
			onFilterInvoices: function(oEvent){
				
				//build filter array
				var aFilter = [];
				var sQuery = oEvent.getParameter("query");
				if (sQuery) {
					aFilter.push( new Filter("ProductName",FilterOperator.Contains,sQuery));
				}
				//filter binding
				var oList = this.byId("invoiceList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
			}
			
		});
	});