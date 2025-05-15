import * as hz from 'horizon/core';

// simulates lines on a computer screen
// 

// example text: "<color=red>Hello</color> <b>World</b>!"
// put that in set.



class computerScroller extends hz.Component<typeof computerScroller> {
  static propsDefinition = {};
  private countUpTimer: number = 0;
  static index: number  = 0;
  static scenarios = [
  "U.S. FIRST STRIKE",
  "USSR FIRST STRIKE",
  "NATO / WARSAW PACT",
  "FAR EAST STRATEGY",
  "US USSR ESCALATION",
  "MIDDLE EAST WAR",
  "USSR CHINA ATTACK",
  "INDIA PAKISTAN WAR",
  "MEDITERRANEAN WAR",
  "HONGKONG VARIANT",
  "SEATO DECAPITATING",
  "CUBAN PROVOCATION",
  "ATLANTIC HEAVY",
  "CUBAN PARAMILITARY",
  "NICARAGUAN PREEMPTIVE",
  "PACIFIC TERRITORIAL",
  "BURMESE THEATERWIDE",
  "TURKISH DECOY",
  "ANGENTINA(SIC) ESCALATION",
  "ICELAND MAXIMUM",
  "ARABIAN THEATERWIDE",
  "U.S. SUBVERSION",
  "AUSTRALIAN MANEUVER",
  "SUDAN SURPRISE",
  "NATO TERRITORIAL",
  "ZAIRE ALLIANCE",
  "ICELAND INCIDENT",
  "ENGLISH ESCALATION",
  "MIDDLE EAST HEAVY",
  "MEXICAN TAKEOVER",
  "CHAD ALERT",
  "SAUDI MANEUVER",
  "AFRICAN TERRITORIAL",
  "ETHIOPIAN ESCALATION",
  "TURKISH HEAVY",
  "NATO INCURSION",
  "U.S. DEFENSE",
  "CAMBODIAN HEAVY",
  "PACT MEDIUM",
  "ARCTIC MINIMAL",
  "MEXICAN DOMESTIC",
  "TAIWAN THEATERWIDE",
  "PACIFIC MANEUVER",
  "PORTUGAL REVOLUTION",
  "ALBANIAN DECOY",
  "PALESTINIAN LOCAL",
  "MOROCCAN MINIMAL",
  "BAVARIAN DIVERSITY",
  "CZECH OPTION",
  "FRENCH ALLIANCE",
  "ARABIAN CLANDESTINE",
  "GABON REBELLION",
  "NORTHERN MAXIMUM",
  "DANISH PARAMILITARY",
  "SEATO TAKEOVER",
  "HAWAIIAN ESCALATION",
  "IRANIAN MANEUVER",
  "NATO CONTAINMENT",
  "SWISS INCIDENT",
  "CUBAN MINIMAL",
  "CHAD ALERT",
  "ICELAND ESCALATION",
  "VIETNAMESE RETALIATIO",
  "SYRIAN PROVOCATION",
  "LIBYAN LOCAL",
  "GABON TAKEOVER",
  "ROMANIAN WAR",
  "MIDDLE EAST OFFENSIVE",
  "DENMARK MASSIVE",
  "CHILE CONFRONTATION",
  "S.AFRICAN SUBVERSION",
  "USSR ALERT",
  "NICARAGUAN THRUST",
  "GREENLAND DOMESTIC",
  "ICELAND HEAVY",
  "KENYA OPTION",
  "PACIFIC DEFENSE",
  "UGANDA MAXIMUM",
  "THAI SUBVERSION",
  "ROMANIAN STRIKE",
  "PAKISTAN SOVEREIGNTY",
  "AFGHAN MISDIRECTION",
  "ETHIOPIAN LOCAL",
  "ITALIAN TAKEOVER",
  "VIETNAMESE INCIDENT",
  "ENGLISH PREEMPTIVE",
  "DENMARK ALTERNATE",
  "THAI CONFRONTATION",
  "TAIWAN SURPRISE",
  "BRAZILIAN STRIKE",
  "VENEZUELA SUDDEN",
  "MAYLASIAN ALERT",
  "ISREAL DISCRETIONARY",
  "LIBYAN ACTION",
  "PALISTINIAN TACTICAL",
  "NATO ALTERNATE",
  "CYPRESS MANEUVER",
  "EGYPT MISDIRECTION",
  "BANGLADESH THRUST",
  "KENYA DEFENSE",
  "BANGLADESH CONTAINMENT",
  "VIETNAMESE STRIKE",
  "ALBANIAN CONTAINMENT",
  "GABON SURPRISE",
  "IRAQ SOVEREIGNTY",
  "VIETNAMESE SUDDEN",
  "LEBANON INTERDICTION",
  "TAIWAN DOMESTIC",
  "ALGERIAN SOVEREIGNTY",
  "ARABIAN STRIKE",
  "ATLANTIC SUDDEN",
  "MONGOLIAN THRUST",
  "POLISH DECOY",
  "ALASKAN DISCRETIONARY",
  "CANADIAN THRUST",
  "ARABIAN LIGHT",
  "S.AFRICAN DOMESTIC",
  "TUNISIAN INCIDENT",
  "MALAYSIAN MANEUVER",
  "JAMAICA DECOY",
  "MALAYSIAN MINIMAL",
  "RUSSIAN SOVEREIGNTY",
  "CHAD OPTION",
  "BANGLADESH WAR",
  "BURMESE CONTAINMENT",
  "ASIAN THEATERWIDE",
  "BULGARIAN CLANDESTINE",
  "GREENLAND INCURSION",
  "EGYPT SURGICAL",
  "CZECH HEAVY",
  "TAIWAN CONFRONTATION",
  "GREENLAND MAXIMUM",
  "UGANDA OFFENSIVE",
  "CASPIAN DEFENSE"
];



  start() {
    this.entity.as(hz.TextGizmo)?.text.set("initting");
    const filePath = 'scenarios.json';
    this.async.setInterval(() => {
      if (computerScroller.index > computerScroller.scenarios.length-5){
        computerScroller.index = 0;
      }     
      else{      
        computerScroller.index++;
      }
      this.entity.as(hz.TextGizmo)?.text.set("<font=electronic highway sign sdf>" + 
         computerScroller.scenarios[computerScroller.index]+ "<br>" +
         computerScroller.scenarios[computerScroller.index+1] + "<br>" + 
         computerScroller.scenarios[computerScroller.index+2]+ "<br>" +     
         computerScroller.scenarios[computerScroller.index+3] + "<br>" + 
         computerScroller.scenarios[computerScroller.index+4]+ "<br>" +
         computerScroller.scenarios[computerScroller.index+5]);
    }, 1 * 900);  
  }


  
}
hz.Component.register(computerScroller);