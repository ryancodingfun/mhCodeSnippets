import * as hz from 'horizon/core';

class countUpTimer extends hz.Component<typeof countUpTimer> {
  static propsDefinition = {};
  static myNumber: number  = 0;

  prestart(){
    console.log('count up timer iniited');
  }

  start() {    
    this.entity.as(hz.TextGizmo)?.text.set("initting");

    this.async.setInterval(() => {
      if (countUpTimer.myNumber > 60){
        countUpTimer.myNumber = 0;
      }     
      else{      
      countUpTimer.myNumber++;
      }
      this.entity.as(hz.TextGizmo)?.text.set("<font=electronic highway sign sdf>" + countUpTimer.myNumber.toString());
    }, 1 * 500);          

    
   }
}
hz.Component.register(countUpTimer);
