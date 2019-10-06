sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function (Controller) {
		return Controller.extend("sai.moola.Walkthrough.controller.App", {
			onOpenDialog: function(){
				this.getOwnerComponent().openHelloDialog();
			}
		});
	});