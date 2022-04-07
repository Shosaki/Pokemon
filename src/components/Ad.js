//import liraries
import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { width, height } from "../../assets/constants";
import { auth, getUserData } from "../../firebase";

let imgTitle;
let imgSource;
let adURL;

// create a component
const Ad = ({ navigation }) => {
  const [showAd, setShowAd] = useState(true);
  const [fireData, setFireData] = useState([]);

  const [tempAge, setTempAge] = useState();
  const [tempGender, setTempGender] = useState("");

  if (tempGender === "male") {
    if (tempAge < 8) {
      imgTitle = "Cadbury Gems";
      imgSource = require("../../assets/Images/Gems_ad.gif");
      adURL =
        "https://www.amazon.in/Cadbury-Gems-Chocolate-10-68-Pack/dp/B0777L6Z1C/ref=sr_1_7?crid=28U4EOSQWAT5L&keywords=cadbury+gems&qid=1648488640&s=grocery&sprefix=cadbury+gems%2Cgrocery%2C500&sr=1-7";
    } else if (tempAge < 13) {
      imgTitle = "Hotwheels";
      imgSource = require("../../assets/Images/Hotwheels_ad.gif");
      adURL =
        "https://www.amazon.in/Hot-Wheels-Space-Strife-Multi/dp/B01LYMVMJM/ref=sr_1_1?keywords=hotwheels&qid=1648488752&sr=8-1";
    } else if (tempAge < 19) {
      imgTitle = "Adidas Predator";
      imgSource = require("../../assets/Images/Adidas_ad.gif");
      adURL =
        "https://www.amazon.in/Adidas-Hirblu-Turbo-hirblu-Football/dp/B096ND9L9W/ref=sr_1_3?keywords=adidas%2Bpredator&qid=1648488993&sr=8-3&th=1&psc=1";
    } else if (tempAge < 26) {
      imgTitle = "Kawasaki ZX-10R";
      imgSource = require("../../assets/Images/Kawasaki_ad.gif");
      adURL = "https://kawasaki-india.com/bikes/ninja-zx-10r/";
    } else if (tempAge < 34) {
      imgTitle = "Hairloss Treatment";
      imgSource = require("../../assets/Images/Hairloss_ad.gif");
      adURL =
        "https://www.vcaretrichology.com/landing/hair-regrowth-treatment/?utm_source=GA_Search_Treatment_Hair_Telangana&utm_medium=GA_Search_Treatment_Hair_Telangana&utm_campaign=GA_Search_Treatment_Hair_Telangana&gclid=CjwKCAjwuYWSBhByEiwAKd_n_mzQgRYhgp2yrtBkbKySkDAlPlalCa4ZxzoyZVWtBLfeTc9ZC7uLQBoCIRgQAvD_BwE";
    } else if (tempAge < 45) {
      imgTitle = "LIC";
      imgSource = require("../../assets/Images/LIC_ad.gif");
      adURL = "https://licindia.in/Home-(1)/Customer-Portal";
    } else if (tempAge < 60) {
      imgTitle = "Audi";
      imgSource = require("../../assets/Images/Audi_ad.gif");
      adURL = "https://www.audi.in/in/web/en/models.html";
    } else if (tempAge < 75) {
      imgTitle = "Plots for Sale";
      imgSource = require("../../assets/Images/Plot_ad.gif");
      adURL =
        "https://www.sandp.co.in/the-crest/plots-near-poonamallee-chennai-for-sale/land-for-sale-near-poonamallee-chennai?gclid=CjwKCAjwuYWSBhByEiwAKd_n_qr4d90CKtKjmRmP9Ji8ZXKzhVJHqmhabLO_7rno1-HyZbj86mcZ9BoCjUkQAvD_BwE";
    } else {
      imgTitle = "Dignity Adult Diapers";
      imgSource = require("../../assets/Images/AdultDiaper_ad.png");
      adURL =
        "https://www.amazon.in/Dignity-Overnight-Adult-Diapers-Large/dp/B07KYJ86KK/ref=sr_1_2_sspa?crid=2XL07TUDMCWWH&keywords=dignity+adult+diapers+large&qid=1648489785&sprefix=dignity+adult%2Caps%2C280&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaSk5LWjQwODI3MEgmZW5jcnlwdGVkSWQ9QTA0MzIzNTYxN1hCRUtKVkNQNzNBJmVuY3J5cHRlZEFkSWQ9QTA4OTU4NzE3N0FOSVE1OTRQSFcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl";
    }
  } else if (tempGender === "female") {
    if (tempAge < 8) {
      imgTitle = "Cadbury Gems";
      imgSource = require("../../assets/Images/Gems_ad.gif");
      adURL =
        "https://www.amazon.in/Cadbury-Gems-Chocolate-10-68-Pack/dp/B0777L6Z1C/ref=sr_1_7?crid=28U4EOSQWAT5L&keywords=cadbury+gems&qid=1648488640&s=grocery&sprefix=cadbury+gems%2Cgrocery%2C500&sr=1-7";
    } else if (tempAge < 13) {
      imgTitle = "Barbie";
      imgSource = require("../../assets/Images/Barbie_ad.gif");
      adURL =
        "https://www.amazon.in/Barbie-GRB47-Fashionistas-Doll-1/dp/B08HFFH1QN/ref=sr_1_1?crid=3E95IRYRKTU7O&keywords=barbie&qid=1648489086&sprefix=bar%2Caps%2C373&sr=8-1";
    } else if (tempAge < 19) {
      imgTitle = "Olay";
      imgSource = require("../../assets/Images/Olay_ad.gif");
      adURL =
        "https://www.amazon.in/Olay-Regenerist-Advanced-Ageing-Sculpting/dp/B078LSV2RL/ref=sr_1_2_sspa?crid=2EK4KY4HAALE4&keywords=olay&qid=1648489049&sprefix=ola%2Caps%2C300&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVjNPU1JQVjRMMDIzJmVuY3J5cHRlZElkPUEwMjk3MDczMjlBQVpDVEE1VEsxMyZlbmNyeXB0ZWRBZElkPUEwODk1NDIxMTdTMjJBVlVJWDBYTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
    } else if (tempAge < 26) {
      imgTitle = "Sephora";
      imgSource = require("../../assets/Images/Sephora_ad.gif");
      adURL =
        "https://www.amazon.in/SEPHORA-COLLECTION-Perfection-foundation-coverage/dp/B09TXMTTZ4/ref=sr_1_2_sspa?crid=17WUFX0P5FS8X&keywords=sephora&qid=1648490027&sprefix=sephora%2Caps%2C238&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyS1paUVA2NzVHT0M5JmVuY3J5cHRlZElkPUEwNjY4MjU0MTNNT0haVzlMVEZNSSZlbmNyeXB0ZWRBZElkPUEwNzE3MzIzM0I4V0VZWkRNVTIyMyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
    } else if (tempAge < 34) {
      imgTitle = "Apple Iphone 13";
      imgSource = require("../../assets/Images/Iphone_ad.gif");
      adURL =
        "https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=1L49NVTUPU1BP&keywords=iphone+13&qid=1648489940&sprefix=iphone+13%2Caps%2C213&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3RThaRU41WUY0NVMmZW5jcnlwdGVkSWQ9QTA3MDU4ODAzNlpJSFI3RjVHVkIxJmVuY3J5cHRlZEFkSWQ9QTA4NzI3NjAxSERUUEIzUlRWSTkxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==";
    } else if (tempAge < 45) {
      imgTitle = "Zara";
      imgSource = require("../../assets/Images/Zara_ad.gif");
      adURL =
        "https://www.zara.com/in/en/cropped-corsetry-inspired-top-p02354636.html?v1=176421020&v2=2026564";
    } else if (tempAge < 60) {
      imgTitle = "Calciumade";
      imgSource = require("../../assets/Images/Calciumade_ad.gif");
      adURL =
        "https://www.watsons.com.ph/calcium-vitamin-d-minerals-1-tablet/p/BP_10062014";
    } else if (tempAge < 75) {
      imgTitle = "Visit Greece";
      imgSource = require("../../assets/Images/Holiday_ad.gif");
      adURL = "https://www.visitgreece.gr/";
    } else {
      imgTitle = "Dignity Adult Diapers";
      imgSource = require("../../assets/Images/AdultDiaper_ad.png");
      adURL =
        "https://www.amazon.in/Dignity-Overnight-Adult-Diapers-Large/dp/B07KYJ86KK/ref=sr_1_2_sspa?crid=2XL07TUDMCWWH&keywords=dignity+adult+diapers+large&qid=1648489785&sprefix=dignity+adult%2Caps%2C280&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaSk5LWjQwODI3MEgmZW5jcnlwdGVkSWQ9QTA0MzIzNTYxN1hCRUtKVkNQNzNBJmVuY3J5cHRlZEFkSWQ9QTA4OTU4NzE3N0FOSVE1OTRQSFcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl";
    }
  } else {
    if (tempAge < 8) {
      imgTitle = "Cadbury Gems";
      imgSource = require("../../assets/Images/Gems_ad.gif");
      adURL =
        "https://www.amazon.in/Cadbury-Gems-Chocolate-10-68-Pack/dp/B0777L6Z1C/ref=sr_1_7?crid=28U4EOSQWAT5L&keywords=cadbury+gems&qid=1648488640&s=grocery&sprefix=cadbury+gems%2Cgrocery%2C500&sr=1-7";
    } else if (tempAge < 13) {
      imgTitle = "Hotwheels";
      imgSource = require("../../assets/Images/Hotwheels_ad.gif");
      adURL =
        "https://www.amazon.in/Hot-Wheels-Space-Strife-Multi/dp/B01LYMVMJM/ref=sr_1_1?keywords=hotwheels&qid=1648488752&sr=8-1";
    } else if (tempAge < 19) {
      imgTitle = "Olay";
      imgSource = require("../../assets/Images/Olay_ad.gif");
      adURL =
        "https://www.amazon.in/Olay-Regenerist-Advanced-Ageing-Sculpting/dp/B078LSV2RL/ref=sr_1_2_sspa?crid=2EK4KY4HAALE4&keywords=olay&qid=1648489049&sprefix=ola%2Caps%2C300&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVjNPU1JQVjRMMDIzJmVuY3J5cHRlZElkPUEwMjk3MDczMjlBQVpDVEE1VEsxMyZlbmNyeXB0ZWRBZElkPUEwODk1NDIxMTdTMjJBVlVJWDBYTiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=";
    } else if (tempAge < 26) {
      imgTitle = "Kawasaki ZX-10R";
      imgSource = require("../../assets/Images/Kawasaki_ad.gif");
      adURL = "https://kawasaki-india.com/bikes/ninja-zx-10r/";
    } else if (tempAge < 34) {
      imgTitle = "Apple Iphone 13";
      imgSource = require("../../assets/Images/Iphone_ad.gif");
      adURL =
        "https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_1_sspa?crid=1L49NVTUPU1BP&keywords=iphone+13&qid=1648489940&sprefix=iphone+13%2Caps%2C213&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE3RThaRU41WUY0NVMmZW5jcnlwdGVkSWQ9QTA3MDU4ODAzNlpJSFI3RjVHVkIxJmVuY3J5cHRlZEFkSWQ9QTA4NzI3NjAxSERUUEIzUlRWSTkxJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==";
    } else if (tempAge < 45) {
      imgTitle = "Zara";
      imgSource = require("../../assets/Images/Zara_ad.gif");
      adURL =
        "https://www.zara.com/in/en/cropped-corsetry-inspired-top-p02354636.html?v1=176421020&v2=2026564";
    } else if (tempAge < 60) {
      imgTitle = "Audi";
      imgSource = require("../../assets/Images/Audi_ad.gif");
      adURL = "https://www.audi.in/in/web/en/models.html";
    } else if (tempAge < 75) {
      imgTitle = "Calciumade";
      imgSource = require("../../assets/Images/Calciumade_ad.gif");
      adURL =
        "https://www.watsons.com.ph/calcium-vitamin-d-minerals-1-tablet/p/BP_10062014";
    } else {
      imgTitle = "Dignity Adult Diapers";
      imgSource = require("../../assets/Images/AdultDiaper_ad.png");
      adURL =
        "https://www.amazon.in/Dignity-Overnight-Adult-Diapers-Large/dp/B07KYJ86KK/ref=sr_1_2_sspa?crid=2XL07TUDMCWWH&keywords=dignity+adult+diapers+large&qid=1648489785&sprefix=dignity+adult%2Caps%2C280&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFaSk5LWjQwODI3MEgmZW5jcnlwdGVkSWQ9QTA0MzIzNTYxN1hCRUtKVkNQNzNBJmVuY3J5cHRlZEFkSWQ9QTA4OTU4NzE3N0FOSVE1OTRQSFcmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl";
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userDetails) => {
      if (userDetails) {
        const callBackFun = (data) => {
          setFireData(data);
        };
        getUserData(callBackFun);
      }
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    fireData.map((item) => {
      item["age"] === undefined
        ? null
        : setTempAge(item["age"], console.log("AGE123456", tempAge));
      item["gender"] === undefined
        ? null
        : setTempGender(
            item["gender"],
            console.log("GENDER123456", tempGender)
          );
    });
  }, [fireData]);

  return (
    <View style={styles.container}>
      <Modal
        visible={showAd}
        onRequestClose={() => navigation.navigate("Tab")}
        transparent
      >
        <View style={styles.adContainer}>
          <View style={styles.adStyle}>
            <View style={styles.adTitle}>
              <View style={styles.adTitleDivision1}>
                <Text style={styles.adText}>{imgTitle}</Text>
              </View>
              <View style={styles.adTitleDivision2}>
                <TouchableOpacity onPress={() => navigation.navigate("Tab")}>
                  {<Icon name="close" size={40} color="#fb3742" />}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.adBody}>
              <TouchableOpacity onPress={() => Linking.openURL(adURL)}>
                <Image
                  source={imgSource}
                  resizeMode="contain"
                  style={{
                    height: height * 0.6,
                    width: width * 0.9,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
  adContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  adStyle: {
    height: height * 0.6,
    width: width * 0.9,
    backgroundColor: "#ffffff",
  },
  adTitle: {
    flex: 0.13,
    flexDirection: "row",
    backgroundColor: "brown",
  },
  adText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "beige",
  },
  adTitleDivision1: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  adTitleDivision2: {
    flex: 0.15,
    justifyContent: "center",
    alignItems: "center",
  },
  adBody: {
    flex: 0.87,
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
});

//make this component available to the app
export default Ad;

// {imgURI}
