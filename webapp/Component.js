sap.ui.define(
	["sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel",
		"./controller/HelloDialog",
		"sap/ui/Device"
	],
	function (UIComponent, JSONModel, HelloDialog, Device) {
		"use strict";
		return UIComponent.extend("sai.moola.Walkthrough.Component", {

			metadata: {
				manifest: "json"
			},

			init: function () {
				
				//call the init function of the parent
				UIComponent.prototype.init.apply(this);
				//set Data Model
				var oData = {
					recipient: {
						name: "World"
					}
				};
				var oModel = new JSONModel(oData);
				this.setModel(oModel);
				//set Device Model
				var oDeviceModel = new JSONModel(Device);
				oDeviceModel.setDefaultBindingMode("OneWay");
				this.setModel(oDeviceModel,"device");
				//set Dialog
				this._helloDialog = new HelloDialog(this.getRootControl());
				//create views based on the url/hash
				
	//			this.getRouter().initialize();
				this.getRouter().initialize();
			},
			exit: function(){
				this._helloDialog.destroy();
				delete this._helloDialog;
			},
			openHelloDialog: function(){
				this._helloDialog.open();
			}
		});
	});