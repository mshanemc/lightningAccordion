({
	toggleOpen : function(component, event) {
		component.set("v.open", !component.get("v.open"));
        //broadcast an event containing the header if opened
        if (component.get("v.open")){
            var AccordionOpenEvent = $A.get("e.msmsf:AccordionOpenEvent");
            AccordionOpenEvent.setParams({
                "openedPanel" : component.get("v.panelHeading")
            });
            AccordionOpenEvent.fire();
        }
	},
    
    handleOpened : function(component, event){
        //if it's not me, I'm going to close
        if (component.get("v.panelHeading") != event.getParam("openedPanel")){
			component.set("v.open", false);
        }
    }
})