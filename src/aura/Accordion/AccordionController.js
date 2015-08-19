({
	handleOpened : function(component, event) {
		//we only care if the closeOthers = true
        if (component.get("v.closeOthers")){
            console.log("rebroadcasting an event to the kids");
            var AccordionOpenEvent = $A.get("e.msmsf:PeerOpened");
            AccordionOpenEvent.setParams({
                "openedPanel" : event.getParam("openedPanel")
            });
            AccordionOpenEvent.fire();
        }
	}    
})