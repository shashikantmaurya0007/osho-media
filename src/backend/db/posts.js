import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: `63cd12d7-9735-4a00-b146-b310b2a5b1b0`,
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
        edited: false,
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
        edited: false,
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `684b7e42-80a1-493e-af38-5a3f0bb388f8`,
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
        edited: false,
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
        edited: false,
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `9bd672d4-8620-4e53-8c1b-a4ebd3eea779`,
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
        edited: false,
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
        edited: false,
        createdAt: new Date("February 13 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `6ea8a1f1-8667-4a6e-88e0-81bab8030b4e`,
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
        edited: false,
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
        edited: false,
        createdAt: new Date("February 20 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3e40ad-a88a-4235-8ab6-0147c3b38932`,
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
  {
    _id: `ca3e40ad-a88a-4235-8ab6-0147c3b38989`,
    content:
      "Be the person you are. Never try to be another, and you will become mature.  - Osho",
    postImage: null,
    likes: {
      likeCount: 3,
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
        {
          firstName: `Suumit`,
          lastName: `Shah`,
          username: `suumitshah`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("February 10 2021 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "thanks for sharing this",
        edited: false,
        createdAt: new Date("February 12 2021 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `63cd12d7-9735-4bc0-b146-b310b2a5b1b0`,
    content:
      "“Desire is alcoholic, desire is the greatest drug possible. Marijuana is nothing, lsd is nothing. Desire is the greatest lsd possible – the ultimate in drugs.",
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654365431/pexels-aviz-3794457_hvc3x0.jpg`,
    likes: {
      likeCount: 3,
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
        {
          firstName: `Suumit`,
          lastName: `Shah`,
          username: `suumitshah`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("June 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-98dt-4a00-b146-b310b2a5b1b0`,
        username: "tanaypratap",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
        text: "life is the best drug",
        edited: false,
        createdAt: new Date("June 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: `63cd12d7-98545-4a00-b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "new generation should read about him",
        edited: false,
        createdAt: new Date("June 21 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `63cdfsfs7-9735-4a00-b146-b310b2a5b1b0`,
    content:
      "No one is special, or, everyone is special. No one is ordinary, or everyone is ordinary. Whatsoever you think about yourself, please think the same about everyone else, and the problem will be solved. ~ Osho",
    postImage: null,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shashi1",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
    createdAt: new Date("December 10 2021 11:06:56"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: `63cd12d7-9735-4a98-b326-b310b2a5b1b0`,
    content: `If you love a flower, don’t pick it up.
    Because if you pick it up it dies and it ceases to be what you love.So if you love a flower, let it be.Love is not about possession.Love is about appreciation`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654878825/ok47tjptdizupbwqyzhk.jpg`,
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
    createdAt: new Date("May 26 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-9735-4a00-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "osho i wish your were alive!",
        createdAt: new Date("June 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `63cd12d7-9735-4a00-b146-b310sfsfsb1b0`,
    content: `“Sex is raw energy. It has to be transformed, and through transformation there is transcendence. Rather than transforming it, religions have been repressing it. And if you repress it the natural outcome is a perverted human being. `,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656099384/alejandra-quiroz-F5hTTI4Hlv4-unsplash_wofeap.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: `shashi`,
          lastName: `Maurya`,
          username: "shashi1",
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
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
    createdAt: new Date("April 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-98545-4sfsffsf-b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "Creep people will never understand the true meaning of post!",
        edited: false,
        createdAt: new Date("June 21 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: `63cd12d7-9735-4a00-dgdsdfsds146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "sex education should be mandatory in schools!",
        createdAt: new Date("June 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: `ca3edfffsfd33434-adfsf0966546s93339c3-sfsfsddw-014dc3b38932`,
        content: `Heard all KK songs again today. Childhood just flashed by. 💔
    
        Sometimes your own life’s best memories are thanks to people you don’t even know.`,
        postImage: null,
        likes: {
          likeCount: 3,
          likedBy: [
            {
              firstName: `Bhavish`,
              lastName: ` Aggarwal`,
              username: `bhash`,
              profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
          ],
          dislikedBy: [],
        },
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        createdAt: new Date("June 2 2022 11:06:56"),
        updatedAt: formatDate(),
        comments: [
          {
            _id: `63cd12d7-985-5454sfsf9890567b146-b310b2a5b1b0`,
            username: `kunalb11`,
            profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
            text: "RIP!",
            edited: false,
            createdAt: new Date("June 9 2022 14:58:45"),
            votes: {
              upvotedBy: [],
              downvotedBy: [],
            },
          },
        ],
      },
    ],
  },
  // tanays post
  {
    _id: `ca3e40ad-a88a-4235-8ab6-0147c3b38800`,
    content:
      "I seriously want to stop tweeting about how awesome Bangalore is but",
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654549239/tanay_s_first_post_bzcwhe.jpg`,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: `shashi`,
          lastName: `Maurya`,
          username: "shashi1",
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
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
    username: "tanaypratap",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
    createdAt: new Date("June 4 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "hahah",
        edited: false,
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3e40ad-a88a-4235-8ab6-014dc3b38932`,
    content:
      "My favorite season is here. Yes, you guessed it right—the placement season.",
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: `shashi`,
          lastName: `Maurya`,
          username: "shashi1",
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
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
    username: "tanaypratap",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
    createdAt: new Date("June 4 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "hahah",
        edited: false,
        createdAt: new Date("February 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3e40ad-a88a-423-sfsab6-014dc3b38932`,
    content: `Nuance 2: Even if you're in the top 1% of college you will want to be in the top 1% of it and then again PoWs help. 
      PoWs are the way to stand out from the crowd and help your recruiter get more signals from your profile than your college and degree name.`,
    postImage: null,
    likes: {
      likeCount: 2,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "tanaypratap",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
    createdAt: new Date("June 9 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `ca3e40ad-a88a-423-sfsab6-014dc3b38sfsfsf2`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "Best tips for delegation and automation?",
        edited: true,
        createdAt: new Date("June 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3e40ad-adfsa-423-sqeqew-014dc3b38932`,
    content: `You can have either an IIT education without a degree, or an IIT degree without an education. 
    Which gets you further on the job market?`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: "tanaypratap",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654073431/tanay_profile_pic_luvain.jpg`,
    createdAt: new Date("May 10 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `ca3e40ad-a88a-423-sffsffada6-014dc3b38sfsfsf2`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "Best tips for delegation and automation?",
        edited: true,
        createdAt: new Date("June 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  //kunal
  {
    _id: `ca3e40ad-adfsa-423-sfsfsddw-014dc3b38932`,
    content: `If you’re building that sells a product or service that’s used
    infrequently, you’re likely to keep paying toll to businesses that are used frequently. Unless you build your own frequency guzzler`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `kunalb11`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
    createdAt: new Date("June 18 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `ca3e40ad-a88a-fsddaafsf3-sffsffada6-014dc3b38sfsfsf2`,
        username: `bhash`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        text: "kunal why dont you release your own course",
        edited: false,
        createdAt: new Date("June 28 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfdsfad-adfdfffsc3-sfsfsddw-014dc3b38932`,
    content: `Relevant every year. Just like becoming profitable.`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656105595/kunalshahpost2_tvzzrl.jpg`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `kunalb11`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
    createdAt: new Date("May 26 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cdss12d7-ovc35-4a00-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "kunal sir you are living legend!",
        createdAt: new Date("June 12 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfdsfad-adf008sc3-sfsfsddw-014dc3b38932`,
    content: `Extra cautious spenders are like a dam that keep accumulating and end up splurging on emotional life events. 
    Trying to make pennies from them is thus hard and better to be building business around their dam breaks.`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `kunalb11`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
    createdAt: new Date("April 14 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cdss12d7-ovc35-sfs420-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "kunal sir you are living legend!",
        createdAt: new Date("April 18 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edffffad-adf09999c3-sfsfsddw-014dc3b38932`,
    content: `Leaders who suck at persuading their team either dominate them or get dominated by them.`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `kunalb11`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
    createdAt: new Date("March 11 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cdss12d7-os99935-sfs420-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "sir i admire you!",
        createdAt: new Date("March 222 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  //suumit
  {
    _id: `ca3edffffad-adfsfs9s93339c3-sfsfsddw-014dc3b38932`,
    content: `And the trend "Shopify Alternatives" is going up!`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656110385/dukan1_vyxode.jpg`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `suumitshah`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    createdAt: new Date("June 19 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cdss12d7-os9493483331sfs420-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "congrats on dukaan success!",
        createdAt: new Date("June 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfdsfs4-adfsfs9s93339c3-sfsfsddw-014dc3b38932`,
    content: `One day all those late nights and early mornings will pay off.

    -somebody`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `suumitshah`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    createdAt: new Date("May 2 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63mfrdss12d7-os9493483331sfs420-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "hardwork pays off!",
        createdAt: new Date("June 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfdsfs4-adfsfs9s93339c3-sfsfsddw-014dc3b38932`,
    content: `One day all those late nights and early mornings will pay off.

    -somebody`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `suumitshah`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    createdAt: new Date("May 2 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63mfrdss12d7-os9d493483331sfs420-dgd146-b310b2a5b1b0`,
        username: "shashi1",
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654086752/shashi_maurya_xrox2a.jpg`,
        text: "hardwork pays off!",
        createdAt: new Date("June 22 2022 10:18:35"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd090s4-adfsfs9s93339c3-sfsfsddw-014dc3b38932`,
    content: `Smart SEOs and growth hackers won't work as an employees in the startups for the same reason why Michael Schumacher won't work as your personal driver.`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `suumitshah`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090778/suumit_shah_mn2nhk.jpg`,
    createdAt: new Date("April 8 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [],
  },
  //bhavish
  {
    _id: `ca3edfffsfd090s4-adfsf06546s93339c3-sfsfsddw-014dc3b38932`,
    content: `Avi, you guys are the best in the business! Great work on helping us setup this amazing exhibit of the Ola S1 in super quick time!`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656112017/bhavish12_xe2fny.jpg`,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `bhash`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
    createdAt: new Date("June 21 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-98545-4sfsf9890f-b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "Amazing sir!",
        edited: false,
        createdAt: new Date("June 23 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd090s4-adfsf0966546s93339c3-sfsfsddw-014dc3b38932`,
    content: `Overwhelmed with the response from all of you & look forward to meeting everyone. Those who have sent in pictures, we'll send you invites soon so you can RSVP ⚡️`,
    postImage: null,
    likes: {
      likeCount: 1,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
        },
      ],
      dislikedBy: [],
    },
    username: `bhash`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
    createdAt: new Date("June 9 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-98545-4sfsf9890567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "Amazing sir!",
        edited: false,
        createdAt: new Date("June 9 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd33434-adfsf0ecg6546s93339c3-sfsfsddw-014dc3b38932`,
    content: `I think the green is becoming one of my favourites 🙂
    What do you all think?`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656113536/bhavesh3_ozp6nt.jpg`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: `bhash`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
    createdAt: new Date("June 1  2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-5454sfsecg9890567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "green looks best!",
        edited: false,
        createdAt: new Date("June 9 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd33434-adfsf0966546s93339c3-sfsfsddw-014dc3b38932`,
    content: `Heard all KK songs again today. Childhood just flashed by. 💔

    Sometimes your own life’s best memories are thanks to people you don’t even know.`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: `bhash`,
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
    createdAt: new Date("June 2 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-5454sfsf9890567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "RIP!",
        edited: false,
        createdAt: new Date("June 9 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  //anupma
  {
    _id: `ca3edfffsfd33434-adfsf768996546s93339c3-sfsfsddw-014dc3b38932`,
    content: `48390 cr … recession? what’s that 🤔`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: "AnupamMittal",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    createdAt: new Date("June 15 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-5454sfsf0874560567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "Faulty DCF based valuation. And mass delusion.",
        edited: false,
        createdAt: new Date("June 22 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd3nf534-6dfsf768996546s93339c3-sfsfsddw-014dc3b38932`,
    content: `of course, it was amazing fun too .. totally crazy being 20 years younger .. at least for some time `,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: "AnupamMittal",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    createdAt: new Date("June 2 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-545u89sfsf0874560567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "congrats!",
        edited: false,
        createdAt: new Date("June 22 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd3nf666-6dfsf768996546s93339c3-sfsfsddw-014dc3b38932`,
    content: `congratulations. these are the stories that make our work meaningful 🙏🏼`,
    postImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1656153328/shaadi.com_kdfwrl.jpg`,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: "AnupamMittal",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    createdAt: new Date("May 31 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-545u9976sfsf0874560567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "We work for customer satisfaction!",
        edited: false,
        createdAt: new Date("June 22 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfffsfd3nf636-6dfsf768996546s93339c3-sfsfsddw-014dc3b38932`,
    content: `As a founder if you don’t think through long-term strategy & position in the industry, none of the daily ops work will matter. I tell my Founders to take a few hours on Saturdays-just founders- & ask.`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: "AnupamMittal",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    createdAt: new Date("May 6 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985-545029976sfsf0874560567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "agree!",
        edited: false,
        createdAt: new Date("June 22 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: `ca3edfsdfsdffd3nf636-6dfsf768996546s93339c3-sfsfsddw-014dc3b38932`,
    content: `People often mistake brand for advertising. Advertising shapes perception but is really only one aspect of creating a brand. in fact, nothing kills a bad product faster than good advertising`,
    postImage: null,
    likes: {
      likeCount: 3,
      likedBy: [
        {
          firstName: `Bhavish`,
          lastName: ` Aggarwal`,
          username: `bhash`,
          profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654091110/bhavish_aggarwal_pc948b.jpg`,
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
      ],
      dislikedBy: [],
    },
    username: "AnupamMittal",
    profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654092599/anupam_mittal_owirks.jpg`,
    createdAt: new Date("April 4 2022 11:06:56"),
    updatedAt: formatDate(),
    comments: [
      {
        _id: `63cd12d7-985sfs45029976sfsf0874560567b146-b310b2a5b1b0`,
        username: `kunalb11`,
        profileImage: `https://res.cloudinary.com/dwqdlzlek/image/upload/v1654090092/kunal_shah_nvoz1m.jpg`,
        text: "agree!",
        edited: false,
        createdAt: new Date("June 22 2022 14:58:45"),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
