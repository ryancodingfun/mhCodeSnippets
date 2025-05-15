import * as hz from 'horizon/core';

// toggles the color
// the interval is at 1100

class visiToggler extends hz.Component<typeof visiToggler>{
    private isRed: boolean = true; 
    preStart() {
        console.log('visibility toggler prestart');
        }
    start() { 
        this.async.setInterval(() => {
            this.isRed = !this.isRed;
            this.entity.color.set(this.isRed? hz.Color.red : hz.Color.white );        
          }, 1100);
        }
    }

hz.Component.register(visiToggler);



