import * as hz from 'horizon/core';

// just generates a random string for missile launch
// codes


class launchCodeMaker extends hz.Component<typeof launchCodeMaker> {
  static propsDefinition = {};

  prestart(){
    this.entity.as(hz.TextGizmo)?.text.set("initting");
  }

  
  start() {

    function generateRandomString(length: number = 10): string {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return randomString;
    }

    this.async.setInterval(() => {
      this.entity.as(hz.TextGizmo)?.text.set("<font=electronic highway sign sdf>" + generateRandomString());
    }, 1 * 450);



  }
}
hz.Component.register(launchCodeMaker);