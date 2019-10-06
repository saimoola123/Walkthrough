sap.ui.define(
	["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment"
	],
	function (Controller, MessageToast, Fragment) {
    
		return Controller.extend("sai.moola.Walkthrough.controller.HelloPanel", {
			
			onShowHello: function () {
				//read Message from i18n model
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMessage = oBundle.getText("helloMsg", [sRecipient]);
				MessageToast.show(sMessage);
			},
			
			onOpenDialog: function(){
				this.getOwnerComponent().openHelloDialog();
			},
			onCloseDialog : function(){
				this.byId("helloDialog").close();
			}

		});
	});