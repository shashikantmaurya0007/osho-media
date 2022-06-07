import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "shashi",
    lastName: "Maurya",
    username: "shashi1",
    email: "shashimourya1@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "bio mein interest hota toh aaj mai doctor hota",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    backgroundImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654089074/shashi_maurya_background_jcg8bi.jpg`,
    website: `https://shashikant-maurya.netlify.app/index.html`,
    followers: [
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
      {
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
      },
    ],
    following: [
      {
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    email: "tanaypratap@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Founder  @invactHQ| x @Microsoft
     | Fixing education | Mentored 100+ students to first tech job | Tweets: Tech, Education, Career, Metaverse and Startups`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
    backgroundImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654094890/tanay_pratap_background_vajqoq.jpg`,
    followers: [
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
    ],
    following: [
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
      {
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
      },
    ],
  },
  {
    _id: uuid(),

    firstName: "Kunal",
    lastName: "Shah",
    username: "kunalb11",
    email: "KunalShah@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "cred karo khush reho",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
    website: null,
    backgroundImage: null,
    followers: [
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
    ],
    following: [
      {
        firstName: `shashi`,
        lastName: `Maurya`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
      },
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
    ],
  },

  {
    _id: uuid(),
    firstName: "Suumit",
    lastName: "Shah",
    username: "suumitshah",
    email: "suumitshah@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "Founder, Dukaan®",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    backgroundImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654098623/summit_shah_background_fffbxg.jpg`,
    website: `https://mydukaan.io/`,
    followers: [
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
      {
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
      },
    ],
    following: [
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
      {
        firstName: `Anupam`,
        lastName: `Mittal`,
        username: `AnupamMittal`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
      },
      {
        firstName: `shashi`,
        lastName: `Maurya`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Bhavish",
    lastName: "Aggarwal",
    username: "bhash",
    email: "bhavishaggarwal@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Building the future at Ola!
    `,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    backgroundImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654100040/bhavish_aggarwal_background_vo5fmw.jpg`,
    website: `https://t.co/2fukVxoHsx`,
    followers: [
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
    ],
    following: [
      {
        firstName: `shashi`,
        lastName: `Maurya`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
      },
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Anupam",
    lastName: "Mittal",
    username: "AnupamMittal",
    email: "AnupamMittal@gmail.com",
    password: "shashi1234",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: `Founder-People Group, Shaadi.com | Tech/Brand Investor | Shark`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    backgroundImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654101166/anupam_mittal_background_tlcaxw.jpg`,
    followers: [
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
      {
        firstName: `Bhavish`,
        lastName: ` Aggarwal`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
      },
    ],
    following: [
      {
        firstName: `shashi`,
        lastName: `Maurya`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
      },
      {
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
      },
      {
        firstName: `Kunal`,
        lastName: `Shah`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
      },
      {
        firstName: `Suumit`,
        lastName: `Shah`,
        username: `suumitshah`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
      },
    ],
  },
];
