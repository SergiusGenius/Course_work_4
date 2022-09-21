window.application = {
    blocks: {},
    screens: {},
    renderScreen: function(screenName) {
        const ob = Object.keys(window.application.screens);
        ob.forEach(object => {
            if (object === undefined){
                console.log('Error of screen');
            }
            if (object === screenName){
                window.application.screens[screenName]()
            }
        })
    },
    renderBlock: function(blockName, container) {
        const el = Object.keys(window.application.blocks);
        el.forEach(element => {
           if(element === undefined){
            console.log('Error of block');
        }
            if(element === blockName){
                window.application.blocks[blockName](container)
            }
        });
    },
    timers: []
}
