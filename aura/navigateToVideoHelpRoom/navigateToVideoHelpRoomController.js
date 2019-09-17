({
    navigateToVideoHelpRoom:function (component, event, helper) {
        $A.get("e.force:navigateToURL").setParams({
            'url' : component.get("v.url")
        }).fire();
        
        //'url' : "http://sshreyasi-ltm1.internal.salesforce.com:3000/salesforce-virtual-room/"
        return;
    }
})