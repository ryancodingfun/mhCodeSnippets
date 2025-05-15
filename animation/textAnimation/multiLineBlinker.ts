import * as hz from 'horizon/core';
import { PropTypes } from 'horizon/core';

// just generates a random string for . and : to
// simulate blinking lights


class textLightBlinker extends hz.Component<typeof textLightBlinker> {
  static propsDefinition = {
    maxLines : { type: PropTypes.Number }
  };

  prestart(){
    this.entity.as(hz.TextGizmo)?.text.set("DOT INIT");
  }
  start() {

    function rndString(length: number = 10): string {
      const characters = '.: ';  // available characters(use . and : for simple dots)
      let randomString = '';
      for (let index = 0; index < length; index++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return randomString;
    }

    this.async.setInterval(() => {
      this.entity.as(hz.TextGizmo).text.set("<font=electronic highway sign sdf>" + 
          rndString() + "<br>" +
          rndString());
    }, 1 * 500);



  }
}
hz.Component.register(textLightBlinker);