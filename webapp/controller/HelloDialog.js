sap.ui.define([
	"sap/ui/base/ManagedObject",
 	"sap/ui/core/Fragment"
	], function (ManagedObject, Fragment) {
		"use strict";
		return ManagedObject.extend("sai.moola.Walkthrough.controller.HelloDialog", {
			
			constructor: function (oView) {
				this._oView = oView;
			},
			exit: function () {
				delete this._oView;
			},
			open: function () {
				var oView = this._oView;
				//create dialog lazily
				if (!oView.byId("helloDialog")) {
					var oFragmentController = {
						onCloseDialog: function () {
							oView.byId("helloDialog").close();
						}
					};
					//Load asynchronous XML fragment
					Fragment.load({
						id: oView.getId(),
						name: "sai.moola.Walkthrough.view.HelloDialog",
						controller: oFragmentController
					}).then(function (oDialog) {
						//connect the dialog to the root view of this component
						oView.addDependent(oDialog);
						oDialog.open();
					});
				} else {
					oView.byId("helloDialog").open();
				}
			}
		});
	});