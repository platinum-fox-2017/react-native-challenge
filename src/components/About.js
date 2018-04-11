import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import MarqueeLabelVertical from 'react-native-lahk-marquee-label-vertical';

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#d8d8d8'
    },
    headerTitleStyle: {
      width: '100%',
      textAlign: 'center'
    },
    headerTintColor: '#000000'
  }

  render() {
    return (
      <View>
        <MarqueeLabelVertical
        speed={50}
        textStyle={{ fontSize: 13, color: 'black' }}
        bgViewStyle={{ height: '100%' }}
        >
          The Ultimate Fighting Championship (UFC) is an American mixed martial arts organization based in Las Vegas, Nevada, that is owned and operated by parent company WME–IMG. It is the largest MMA promotion in the world and features the top-ranked fighters of the sport.[3] Based in the United States, the UFC produces events worldwide[4] that showcase eleven weight divisions and abide by the Unified Rules of Mixed Martial Arts.[5] As of 2017, the UFC has held over 400 events. Dana White serves as the president of the UFC. He has held that position since 2001; while under the leadership of Dana White the UFC has grown into a globally popular multibillion-dollar enterprise.{'\n'}{'\n'}
          The first event was held in 1993 at the McNichols Sports Arena in Denver, Colorado.[7] The purpose of the early Ultimate Fighting Championship competitions was to identify the most effective martial art in a contest with minimal rules between competitors of different fighting disciplines like boxing, Brazilian jiu-jitsu, sambo, wrestling, Muay Thai, karate, and judo. In subsequent competitions, fighters began adopting effective techniques from more than one discipline, which indirectly helped create an entirely separate style of fighting known as present-day mixed martial arts.[8] In 2016, UFC's parent company, Zuffa, was sold to William Morris Endeavor (WME–IMG) for $4.2 billion.{'\n'}{'\n'}
          With a TV deal and expansion in Europe, Australia,[10]West Asia,[11] East Asia,[12] and new markets within the United States, the UFC as of 2017 has gained in popularity, along with greater mainstream media coverage. As of 2017, viewers can access live UFC fights and fight replays on their subscription network UFC Fight Pass at a cost of $7.99–$9.99 USD per month via devices like Apple TV, iPhone, Android, Xbox, Roku, and Google Chromecast[13] as well as on pay-per-view in the U.S., Brazil, Australia, Canada, New Zealand, and Italy. On network TV, UFC content is available on Fox, Fox Sports 1, and Fox Sports 2[14] in the U.S., on ESPN in the Caribbean, on BT Sport in the United Kingdom and Ireland, as well as in 150 countries and 22 different languages worldwide.{'\n'}{'\n'}
          Art Davie proposed to John Milius and Rorion Gracie an eight-man single-elimination tournament called "War of the Worlds". The tournament was inspired by the Gracies in Action video-series produced by the Gracie family of Brazil which featured Gracie jiu-jitsu students defeating martial-arts masters of various disciplines such as karate, kung fu, and kickboxing. The tournament would also feature martial artists from different disciplines facing each other in no-holds-barred combat to determine the best martial art and would aim to replicate the excitement of the matches Davie saw on the videos.[15] Milius, a noted film director and screenwriter, as well as a Gracie student, agreed to act as the event's creative director. Davie drafted the business plan and twenty-eight investors contributed the initial capital to start WOW Promotions with the intent to develop the tournament into a television franchise.{'\n'}{'\n'}
          In 1993, WOW Promotions sought a television partner and approached pay-per-view producers TVKO (HBO), SET (Showtime), and Campbell McLaren at the Semaphore Entertainment Group (SEG). Both TVKO and SET declined, but SEG – a pioneer in pay-per-view television which had produced such offbeat events as a gender versus gender tennis match between Jimmy Connors and Martina Navratilova – became WOW's partner in May 1993.[17] SEG contacted video and film art director Jason Cusson to design the trademarked "Octagon", a signature piece for the event. Cusson remained the Production Designer through UFC 27.[15] SEG devised the name for the show as The Ultimate Fighting Championship.{'\n'}{'\n'}
          WOW Promotions and SEG produced the first event, later called UFC 1, at McNichols Sports Arena in Denver, Colorado on November 12, 1993. Art Davie functioned as the show's booker and matchmaker.[19] The show proposed to find an answer for sports fans' questions such as: "Can a wrestler beat a boxer?"[20] As with most martial arts at the time, fighters typically had skills in just one discipline and had little experience against opponents with different skills.[21] The television broadcast featured kickboxers Patrick Smith and Kevin Rosier, savate fighter Gerard Gordeau, karate expert Zane Frazier, shootfighter Ken Shamrock, sumo wrestler Teila Tuli, boxer Art Jimmerson, and 175 lb (79 kg) Brazilian jiu-jitsu black belt Royce Gracie—younger brother of UFC co-founder Rorion, whom Rorion handpicked to represent his family in the competition. Royce Gracie's submission skills proved the most effective in the inaugural tournament, earning him the first ever UFC tournament championship[22] after submitting Jimmerson, Shamrock, and Gordeau in succession. The show proved extremely successful with 86,592 television subscribers on pay-per-view.
        </MarqueeLabelVertical>
      </View>
    )
  }
}
