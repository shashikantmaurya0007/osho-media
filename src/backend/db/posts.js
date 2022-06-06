import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "The more alive you are, the less repetitive. Only a dead man can be consistent. Living is inconsistency; life is freedom. Freedom cannot  be consistent. ~ Osho",
    postImage:
      "https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365414/pexels-oliver-sjo%CC%88stro%CC%88m-1098365_ss3usy.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
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
      ],
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "big admirer of osho",
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "new generation should read about him",
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "If everyone starts giving love instead of talking about love. This very earth can become a paradise. - Osho",
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "absolutely agree",
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "sir tusi great ho",
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `Love is a spiritual phenomenon; lust is physical. Ego is psychological; love is spiritual.~osho`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365419/pexels-%D0%B8%D0%BD%D0%BD%D0%B0-%D0%BC%D0%B8%D0%BA%D0%B8%D1%82%D0%B0%D1%81%D1%8C-4252184_rnc7me.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "absolutely agree",
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "sir tusi great ho",
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `Don't do anything – no repetition of mantra, no repetition of  god name – just watch whatever the mind is doing. don't prevent it, don't repress it; be a watcher,the miracle of watching is meditation`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365418/pexels-prince-kumar-2421467_bsdkqv.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
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
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 18 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "absolutely agree",
        createdAt: new Date("February 19 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "sir tusi great ho",
        createdAt: new Date("February 20 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: `When love blossoms in its totality, everything simply is. The fear of tomorrow does not arise; hence there is no question of attachment, clinging, marriage, of any kind of contract, bondage. ~ Osho`,
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [],
  },
];
