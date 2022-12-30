const BOT_MAPS = {
  disappointed_parent: {
    title: "talking to ur parents simulator",
    description: ["aaaa"],

    states: {
      origin: {
        onEnterSay: "#question#",
        exits: ["'no' ->neg", "'ye' ->pos", "'*' ->neut"],
      },

      tran: {
        onEnterSay: "#also# #trans#",
        exits: ["wait:5 ->origin"],
      },

      pos: {
        onEnterSay: "ok that's good",
        exits: ["wait:5 ->tran"],
      },

      neg: {
        onEnterSay: "#negs#",
        exits: ["wait:5 ->neg2"],
      },

      neg2: {
        onEnterSay: "you know #char# got #thing# #time#",
        exits: ["wait:5 ->tran"],
      },

      neut: {
        onEnterSay: "#neuts#",
        exits: ["wait:5 ->tran"],
      },
    },

    grammar: {
      question: [
        "are you coming back for thanksgiving?",
        "doing well in school?",
        "is your room clean?",
        "did you exercise today?",
        "got all As this quarter?",
        "got internship yet?",
        "studying hard?",
        "got job offer yet?",
        "do you have 4.0 gpa?",
      ],
      char: [
        "my friend's son",
        "my friend's daughter",
        "your friend from middle school",
        "another person at your school",
        "my coworker's daughter",
        "this guy at stanford",
        "i read about this 16-year-old on weibo who",
        "i saw someone on wechat who",
        "your ex",
        "my friend's son's friend",
        "my friend's son's cousin",
        "my boss's daughter",
        "my friend's cousin's daughter's boyfriend's pet turtle",
        "your high school classmate",
        "someone with the same name as you",
        "so many people at your school",
        "everyone i know",
        "our dog",
        "your secret twin who was separated at birth",
      ],
      thing: [
        "amazon internship",
        "phd admission",
        "4.0 gpa",
        "research published",
        "book published",
        "microsoft job",
        "google internship",
        "job at apple",
        "qualified for olympics",
        "award at regeneron science competition",
        "award in national debate tournament",
        "tesla internship",
        "a billion dollars from selling a startup",
        "rich from bitcoin",
        "into yale law school",
      ],
      time: ["today", "yesterday", "last week", "last month", "recently", ""],
      poss: ["ok good", "that's good", "that's a surprise", "nice", "k"],
      negs: ["you're a disappointment", "why not??", "no worries", ":("],
      neuts: ["ok", "nice", "cool", "haha", "alright", "?", "what?"],
      also: ["also", ""],
      trans: [
        "your brother came home yesterday",
        "we got a package for you",
        "did you see the news",
        "you should exercise more",
        "you need more sunlight",
        "lands end has sale right now",
        "it's getting cold, make sure you stay warm",
        "doing anything fun this weekend?",
        "we sent you chestnuts",
        "keep working hard",
        "good luck with finals",
        "did you go to chicago recently?",
        "你知道我和你爸来美国是为了给你更好的生活",
        "现在你可能很难找到工作，因为recession现在让事情变得艰难",
        "昨天看到了你的中学小朋友",
        "我们买了dyson吸尘器, 真的很好",
        "把你的tuition账单寄给我"
      ],
    },
  },
};
