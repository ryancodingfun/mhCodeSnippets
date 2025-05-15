import * as hz from 'horizon/core';

// just generates a random string for . and : to
// simulate blinking lights


class textLightBlinker extends hz.Component<typeof textLightBlinker> {
  static propsDefinition = {};

  prestart(){
    this.entity.as(hz.TextGizmo)?.text.set("DOT INIT");
  }
  start() {

    function generateRandomString(length: number = 10): string {
      const characters = '.:';
      let randomString = '';
      for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return randomString;
    }

    this.async.setInterval(() => {
      this.entity.as(hz.TextGizmo).text.set("<font=electronic highway sign sdf> <cspace=.01>" +
         generateRandomString() + 
        "</cspace>");
    }, 1 * 500);



  }
}
hz.Component.register(textLightBlinker);